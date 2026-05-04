#!/usr/bin/env python3
"""
Validates state.js structure before commit. Prevents scheduled tasks from
silently dropping top-level STATE keys (which would break the dashboard renderers).

Exits 0 on success, non-zero on failure with a clear error message.

Run manually: python3 scripts/validate-state.py
Run via git hook: .githooks/pre-commit calls this on every commit.
"""

import re
import sys
import os

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATE_PATH = os.path.join(REPO_ROOT, 'state.js')

# Required top-level STATE keys — dropping any breaks the dashboard
REQUIRED_STATE_KEYS = [
    'user', 'rivals', 'race', 'winProbabilities', 'scenarioModel',
    'xptsModel', 'constructorModel', 'strategyMode', 'sharpeLambda',
    'thingsToConsider', 'chipPlan', 'montreal', 'risks',
]

# Required nested STATE.user keys
REQUIRED_USER_KEYS = [
    'teamName', 'name', 'rank', 'points', 'deltaWeekend',
    'chipsRemaining', 'chipsBurned', 'lineup',
]

# Required nested STATE.race keys
REQUIRED_RACE_KEYS = ['name', 'round', 'sessions', 'raceGrid', 'weather']

# Required nested STATE.thingsToConsider keys
REQUIRED_TTC_KEYS = ['upgrades', 'driverForm', 'strategyConsiderations', 'scheduleEvents']

# Required RACE_SCHEDULE keys
REQUIRED_SCHEDULE_KEYS = ['race', 'round', 'raceStartUTC', 'raceStartLocalLabel']

# Minimum array sizes — guards against accidental truncation
MIN_RIVALS = 7
MIN_LINEUP = 7  # 5 drivers + 2 constructors
MIN_XPTS = 15
MIN_CONSTRUCTORS = 8
MIN_WIN_PROBS = 5

# Reasonable file size guard — true rewrite to a minimal schema would tank this
MIN_LINES = 130
MAX_LINES = 400


def fail(msg):
    print(f"❌ state.js validation failed: {msg}", file=sys.stderr)
    print(f"   File: {STATE_PATH}", file=sys.stderr)
    sys.exit(1)


def check_keys(text, parent, required_keys, parent_name):
    """Check that `parent` block contains all required_keys (top-level keys within that block)."""
    # Find the parent block (e.g., `user: {`) and isolate its top-level keys
    pattern = re.compile(rf'(?:^|\n)\s*{re.escape(parent)}:\s*\{{', re.MULTILINE)
    match = pattern.search(text)
    if not match:
        # Top-level STATE keys are at the const STATE block — handle that separately
        if parent_name == 'STATE':
            for k in required_keys:
                if not re.search(rf'(?:^|\n)\s+{re.escape(k)}:\s*[\[\{{]?', text):
                    fail(f"missing top-level STATE.{k}")
            return
        fail(f"could not locate {parent_name}.{parent} block")
    # For nested blocks, do a simpler key-presence check within roughly the next block
    # Just check the keys exist somewhere in the file under that parent — keep it loose
    for k in required_keys:
        if not re.search(rf'\b{re.escape(k)}\s*:', text):
            fail(f"missing {parent_name}.{parent}.{k}")


def main():
    if not os.path.exists(STATE_PATH):
        fail(f"state.js not found at {STATE_PATH}")

    with open(STATE_PATH) as f:
        text = f.read()
    lines = text.count('\n') + 1

    # Sanity: file size
    if lines < MIN_LINES:
        fail(f"state.js shrank to {lines} lines (min {MIN_LINES}). Schema likely truncated. Restore from git history.")
    if lines > MAX_LINES:
        fail(f"state.js bloated to {lines} lines (max {MAX_LINES}). Probably duplicate content.")

    # Top-level STATE block must exist
    if not re.search(r'^const STATE\s*=\s*\{', text, re.MULTILINE):
        fail("missing `const STATE = {` declaration")

    # Top-level RACE_SCHEDULE block must exist
    if not re.search(r'^const RACE_SCHEDULE\s*=\s*\{', text, re.MULTILINE):
        fail("missing `const RACE_SCHEDULE = {` declaration")

    # Required top-level STATE keys
    check_keys(text, 'STATE', REQUIRED_STATE_KEYS, 'STATE')

    # Required STATE.user keys
    for k in REQUIRED_USER_KEYS:
        if not re.search(rf'\b{re.escape(k)}\s*:', text):
            fail(f"missing STATE.user.{k}")

    # Required STATE.race keys
    for k in REQUIRED_RACE_KEYS:
        if not re.search(rf'\b{re.escape(k)}\s*:', text):
            fail(f"missing STATE.race.{k}")

    # Required STATE.thingsToConsider keys
    for k in REQUIRED_TTC_KEYS:
        if not re.search(rf'\b{re.escape(k)}\s*:', text):
            fail(f"missing STATE.thingsToConsider.{k}")

    # Required RACE_SCHEDULE keys
    for k in REQUIRED_SCHEDULE_KEYS:
        if not re.search(rf'\b{re.escape(k)}\s*:', text):
            fail(f"missing RACE_SCHEDULE.{k}")

    # Minimum array sizes — count `{` opens within each named array block
    def count_array_items(name, min_count):
        m = re.search(rf'{re.escape(name)}:\s*\[(.*?)\]\s*,?\s*\n', text, re.DOTALL)
        if not m:
            fail(f"could not locate `{name}: [...]` array")
        block = m.group(1)
        # Count top-level objects: `{ ... }` at depth 0
        depth = 0
        items = 0
        for ch in block:
            if ch == '{':
                if depth == 0:
                    items += 1
                depth += 1
            elif ch == '}':
                depth -= 1
        if items < min_count:
            fail(f"{name} has only {items} items (min {min_count})")
        return items

    rivals = count_array_items('rivals', MIN_RIVALS)
    lineup = count_array_items('lineup', MIN_LINEUP)
    xpts = count_array_items('xptsModel', MIN_XPTS)
    constructors_arr = count_array_items('constructorModel', MIN_CONSTRUCTORS)
    win_probs = count_array_items('winProbabilities', MIN_WIN_PROBS)

    print(f"✅ state.js valid · {lines} lines · "
          f"rivals={rivals} lineup={lineup} xpts={xpts} "
          f"constructors={constructors_arr} winProbs={win_probs}")


if __name__ == '__main__':
    main()
