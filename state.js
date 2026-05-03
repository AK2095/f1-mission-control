// ============================================================
// F1 Fantasy Mission Control · shared STATE
// Loaded by both index.html (desktop) and mobile.html (iPhone)
// Scheduled tasks update THIS file — both views auto-refresh on next reload.
// ============================================================
const STATE = {
  user: {
    teamName: 'AMG_AK',
    name: 'Akshay Koottala',
    rank: 1,
    prevRank: 3,
    points: 1024,
    deltaWeekend: 148,
    chipActive: 'Limitless',
    chipsRemaining: ['Extra DRS Boost', 'Wildcard', 'No Negative', 'Autopilot'],
    chipsBurned: ['Limitless'],
    lineup: [
      { name: 'Lando Norris', team: 'McLaren', teamClass: 'mclaren', sprint: 13, quali: 14, sundayE: [25, 50], price: 26.5, gridSprint: 1, gridRace: 4, role: 'Driver' },
      { name: 'Kimi Antonelli', team: 'Mercedes', teamClass: 'mercedes', sprint: -1, quali: 22, sundayE: [20, 40], price: 24.1, gridSprint: 2, gridRace: 1, role: 'Driver' },
      { name: 'Oscar Piastri', team: 'McLaren', teamClass: 'mclaren', sprint: 8, quali: 12, sundayE: [18, 35], price: 24.6, gridSprint: 3, gridRace: 7, role: 'Driver' },
      { name: 'Charles Leclerc', team: 'Ferrari', teamClass: 'ferrari', sprint: 14, quali: 18, sundayE: [50, 90], price: 23.7, gridSprint: 4, gridRace: 3, role: '2X DRS Boost' },
      { name: 'George Russell', team: 'Mercedes', teamClass: 'mercedes', sprint: 7, quali: 13, sundayE: [15, 28], price: 28.3, gridSprint: 6, gridRace: 5, role: 'Driver' },
      { name: 'Ferrari', team: 'Ferrari', teamClass: 'ferrari', sprint: 9, quali: 8, sundayE: [30, 55], price: 24.2, gridSprint: '—', gridRace: '—', role: 'Constructor' },
      { name: 'Mercedes', team: 'Mercedes', teamClass: 'mercedes', sprint: 6, quali: 5, sundayE: [22, 45], price: 30.2, gridSprint: '—', gridRace: '—', role: 'Constructor' }
    ]
  },
  rivals: [
    { rank: 2, team: 'Force Philadelphia', name: 'Max Devers', points: 1014, deltaWeekend: 76, sprintScore: 12, chipsBurned: ['Extra DRS Boost'], chipsRemaining: ['Wildcard', 'Limitless', 'No Negative', 'Autopilot'], lineup: ['ANT (2x)', 'HUL', 'OCO', 'LAW', 'PER', 'Ferrari', 'McLaren'], note: 'Burned 3x at China · Took -10 transfer hit at Miami sprint' },
    { rank: 3, team: 'SuperFastLex', name: 'Al Dev', points: 948, deltaWeekend: 69, sprintScore: '~58', chipsBurned: [], chipsRemaining: ['?'], lineup: ['HAM (2x)', 'PER', 'LIN', 'LAW', 'COL', 'Mercedes', 'Ferrari'], note: 'Pattern: HAM + Ferrari · Mercedes constructor' },
    { rank: 4, team: 'Hawaii Hamilton', name: 'Grant Palmer', points: 721 },
    { rank: 5, team: 'Forza Chiacchio', name: 'Michele Chiacchio', points: 719 },
    { rank: 6, team: 'No Lane Nori', name: 'Erica Goodyear', points: 694 },
    { rank: 7, team: 'Rawdawg Racing Club', name: 'Randall Jordan', points: 659 },
    { rank: 8, team: "Bandit's Booookaaahhhke...", name: 'Jade Rodriguez', points: 335 }
  ],
  race: {
    name: 'Miami GP',
    round: 6,
    isSprint: true,
    sessions: { fp1: 'done', sprintQuali: 'done', sprint: 'done', raceQuali: 'done', race: 'pending' },
    raceGrid: [
      { pos: 1, driver: 'K. Antonelli', team: 'Mercedes', teamClass: 'mercedes', mine: true },
      { pos: 2, driver: 'M. Verstappen', team: 'Red Bull', teamClass: 'redbull', mine: false },
      { pos: 3, driver: 'C. Leclerc', team: 'Ferrari', teamClass: 'ferrari', mine: true, mark: '2x' },
      { pos: 4, driver: 'L. Norris', team: 'McLaren', teamClass: 'mclaren', mine: true },
      { pos: 5, driver: 'G. Russell', team: 'Mercedes', teamClass: 'mercedes', mine: true },
      { pos: 6, driver: 'L. Hamilton', team: 'Ferrari', teamClass: 'ferrari', mine: false },
      { pos: 7, driver: 'O. Piastri', team: 'McLaren', teamClass: 'mclaren', mine: true },
      { pos: 8, driver: 'F. Colapinto', team: 'Alpine', teamClass: 'alpine', mine: false },
      { pos: 9, driver: 'I. Hadjar', team: 'Racing Bulls', teamClass: 'rb', mine: false },
      { pos: 10, driver: 'P. Gasly', team: 'Alpine', teamClass: 'alpine', mine: false }
    ],
    weather: { rain: 57, thunder: 45, halt: 18, dryProb: 28, wetProb: 54, haltProb: 18 }
  },
  winProbabilities: [
    { driver: 'K. Antonelli', team: 'mercedes', poly: 38, dk: 37, sharp: 'pole premium', mine: true },
    { driver: 'M. Verstappen', team: 'redbull', poly: 26, dk: 25, sharp: 'rain hedge + P2 grid', mine: false },
    { driver: 'C. Leclerc', team: 'ferrari', poly: 12, dk: 12, sharp: 'value at 2x', mine: true, mark: '2x' },
    { driver: 'L. Norris', team: 'mclaren', poly: 11, dk: 12, sharp: 'P4 grid drag', mine: true },
    { driver: 'G. Russell', team: 'mercedes', poly: 6, dk: 7, sharp: 'fade', mine: true },
    { driver: 'O. Piastri', team: 'mclaren', poly: 4, dk: 5, sharp: 'P7 grid drag', mine: true },
    { driver: 'L. Hamilton', team: 'ferrari', poly: 3, dk: 4, sharp: 'wet hedge', mine: false }
  ],
  scenarioModel: [
    { scenario: 'Dry race', prob: 25, userE: 245, maxE: 105, swing: 140 },
    { scenario: 'Wet/chaotic', prob: 55, userE: 200, maxE: 95, swing: 105 },
    { scenario: 'Halted/red flag', prob: 20, userE: 110, maxE: 55, swing: 55 }
  ],
  xptsModel: [
    { driver: 'LEC', xpts: 40, xDelta: 0.25, price: 23.7, team: 'ferrari' },
    { driver: 'HAM', xpts: 38.1, xDelta: 0.22, price: 23.2, team: 'ferrari' },
    { driver: 'ANT', xpts: 33.4, xDelta: 0.30, price: 24.1, team: 'mercedes' },
    { driver: 'RUS', xpts: 33.3, xDelta: 0.19, price: 28.3, team: 'mercedes' },
    { driver: 'NOR', xpts: 32.1, xDelta: -0.14, price: 26.5, team: 'mclaren' },
    { driver: 'PIA', xpts: 31.5, xDelta: 0.02, price: 24.6, team: 'mclaren' },
    { driver: 'VER', xpts: 17.3, xDelta: -0.21, price: 28.2, team: 'redbull' },
    { driver: 'OCO', xpts: 12.7, xDelta: 0.38, price: 9.1, team: 'haas' },
    { driver: 'BEA', xpts: 7.2, xDelta: 0.15, price: 9.2, team: 'haas' },
    { driver: 'HAD', xpts: 6, xDelta: -0.07, price: 13.3, team: 'rb' },
    { driver: 'HUL', xpts: 5.6, xDelta: 0.28, price: 5, team: 'audi' },
    { driver: 'GAS', xpts: 4, xDelta: 0.20, price: 13, team: 'alpine' },
    { driver: 'BOR', xpts: 3.5, xDelta: -0.49, price: 5.8, team: 'audi' },
    { driver: 'SAI', xpts: 3.5, xDelta: 0.07, price: 12.4, team: 'williams' },
    { driver: 'COL', xpts: 2.7, xDelta: 0.23, price: 7.6, team: 'alpine' },
    { driver: 'ALB', xpts: 2, xDelta: -0.59, price: 10.2, team: 'williams' },
    { driver: 'LAW', xpts: 1.4, xDelta: 0.53, price: 7.5, team: 'rb' },
    { driver: 'LIN', xpts: 1.2, xDelta: -0.31, price: 7.6, team: 'rb' },
    { driver: 'ALO', xpts: 0.5, xDelta: -0.60, price: 8.2, team: 'aston' },
    { driver: 'STR', xpts: -2, xDelta: -0.60, price: 6.2, team: 'aston' },
    { driver: 'BOT', xpts: -5.3, xDelta: -0.27, price: 4.1, team: 'cadillac' },
    { driver: 'PER', xpts: -6.1, xDelta: 0.05, price: 7, team: 'cadillac' }
  ],
  constructorModel: [
    { team: 'FER', xpts: 93.8, xDelta: 0.30, price: 24.2 },
    { team: 'MER', xpts: 79.2, xDelta: 0.30, price: 30.2 },
    { team: 'MCL', xpts: 77.8, xDelta: 0.25, price: 28.6 },
    { team: 'RBR', xpts: 35, xDelta: 0.19, price: 29.1 },
    { team: 'HAA', xpts: 18, xDelta: 0.58, price: 9.2 },
    { team: 'VRB', xpts: 16, xDelta: 0.60, price: 8.1 },
    { team: 'ALP', xpts: 12, xDelta: 0.54, price: 14.3 },
    { team: 'WIL', xpts: 9, xDelta: 0.05, price: 13.8 },
    { team: 'AUD', xpts: 5, xDelta: 0.33, price: 5.6 },
    { team: 'CAD', xpts: 3, xDelta: 0.16, price: 5 },
    { team: 'AST', xpts: 1, xDelta: -0.60, price: 8.5 }
  ],
  strategyMode: 'points',
  sharpeLambda: 20,

  // Last refreshed: Tue May 5, 2026 · 8am · f1-intel-watcher-weekly
  thingsToConsider: {
    upgrades: [
      { team: 'Mercedes', impact: '🟢 Major', date: 'Montreal', detail: 'NEW (Tue intel): W17 floor package arrives in Montreal — new floor corner with larger brake duct inlet/exits, reduced-chord wing elements on floor edge for higher mass flow. Allison admitted Mercedes was "out of sync" at Miami; Montreal is the catch-up race. If it lands, Mercedes constructor stays best-in-class.', action: 'Hold Mercedes constructor through Montreal Sprint. Re-evaluate Sunday night — if floor works, lock through Spain. If flat, McLaren swap is live.' },
      { team: 'McLaren', impact: '🟢 Major', date: 'Montreal', detail: 'NEW (Tue intel): Stella confirmed "completely new car" continues into Montreal — front wing, rear wing, AND front suspension revisions on the MCL40. Suspension change is the structural upgrade — wider working window, better kerb ride at Montreal\'s chicanes.', action: 'Norris/Piastri asymmetric upside intact. McLaren constructor still the value play vs Mercedes price.' },
      { team: 'Ferrari', impact: '🟡 Hold', date: 'Montreal', detail: 'NEW (Tue intel): No new Montreal-specific package declared — Ferrari is iterating the Miami 11-change floor/diffuser/exhaust package. Carries forward, no degradation expected. Leclerc Miami pace shows the package works.', action: 'Hold LEC 2x DRS through Montreal. No reason to swap target driver yet.' },
      { team: 'Red Bull', impact: '🟡 Hold', date: 'Montreal', detail: 'NEW (Tue intel): No new Montreal-specific package declared. RB22 stays as-is. Verstappen Miami P2 grid was a circuit-fit fluke more than pace recovery — don\'t over-extrapolate to Montreal.', action: 'Red Bull constructor stays sell. VER stays bench/avoid for 2x.' },
      { team: 'Audi (Sauber)', impact: '🟡 Watch', date: 'Montreal', detail: 'Hulkenberg has finished AHEAD of his starting grid position in last 2 Montreal outings — track-specific edge. Mid-grid pace + +$0.28M expected gain still holds.', action: 'HUL is the optimal $5.0M budget enabler for Montreal. High floor on a circuit he over-performs at.' },
      { team: 'Field PU reliability', impact: '🔴 Risk', date: 'Season', detail: 'NEW (Tue intel): Most teams still on first ICE/turbo/MGU-K, BUT Control Electronics already on 2nd/3rd for a meaningful chunk of the field. 2026 reliability is the differentiator — DNF jeopardy elevated all year. Mercedes PU unresolved root cause from Miami stays the lead concern.', action: 'Bake +2-3% baseline DNF into all sims. Mercedes pair penalty: +5% over baseline until Allison signs off.' }
    ],
    driverForm: [
      { driver: 'K. Antonelli', team: 'Mercedes', code: 'ANT', trend: '🟢 Hot', formNote: 'Miami main quali pole (3rd consecutive). Season-leading 150 pts. China + Japan back-to-back wins. 29% picked. Mercedes Montreal floor lifts ceiling further.', strength: 'Qualifying pace, raw speed, low-error rate', weakness: 'Rookie at Montreal (no F1 history at this circuit), Mercedes PU still flagged', dnfRisk: '12% (Mercedes PU + rookie wall risk)' },
      { driver: 'L. Norris', team: 'McLaren', code: 'NOR', trend: '🟢 Hot', formNote: 'Miami Sprint WIN + sprint pole. Now back-to-back form. Won Sao Paulo 2025. Wet specialist — Montreal\'s rain-prone May 24 slot fits him. 8% picked = differential lever.', strength: 'Wet weather, racecraft, overtaking, McLaren upgrade compounding', weakness: 'Occasional dry-quali inconsistency', dnfRisk: '8%' },
      { driver: 'O. Piastri', team: 'McLaren', code: 'PIA', trend: '🟢 Rising', formNote: 'Miami P3 sprint. Main quali P7 was the down note but McLaren Montreal upgrade (front suspension) is exactly what helps him exploit kerbs. Sprint format Montreal favors him.', strength: 'Race pace, tire conservation', weakness: 'Wet weather inexperience vs Norris', dnfRisk: '8%' },
      { driver: 'C. Leclerc', team: 'Ferrari', code: 'LEC', trend: '🟢 Hot (your 2x)', formNote: 'Miami P3 sprint, P3 main quali, topped FP1. 30% picked. Ferrari Miami upgrade carrying into Montreal. Strong Montreal historical record.', strength: 'Wet weather, qualifying, kerb-heavy circuits', weakness: 'Race-day strategy errors historically', dnfRisk: '10%' },
      { driver: 'L. Hamilton', team: 'Ferrari', code: 'HAM', trend: '🟡 Steady', formNote: '92 season pts. Miami P6/P7 quali. Outpaced by Leclerc but Ferrari package lifts him too. 7-time Montreal winner — circuit-specific upside if wet.', strength: 'Wet weather mastery, Montreal historical king, tire management', weakness: 'Outright quali pace declining vs Leclerc', dnfRisk: '8%' },
      { driver: 'M. Verstappen', team: 'Red Bull', code: 'VER', trend: '🟡 Mixed', formNote: 'Miami P2 quali = first 2026 front row, but no Montreal-spec upgrades declared. 77 season pts (well below his standard). Wet specialist if Montreal rains.', strength: 'Wet race specialist, racecraft', weakness: 'RB22 fundamentally off pace; no upgrade lifeline this round', dnfRisk: '6%' },
      { driver: 'G. Russell', team: 'Mercedes', code: 'RUS', trend: '🟡 Mixed', formNote: 'Miami P5 quali. 111 season pts. 28% picked. Mercedes Montreal upgrade benefits him equally — but PU concern unresolved.', strength: 'Qualifying, mechanical sympathy, Montreal podium history', weakness: 'Mercedes PU vulnerability shared with Antonelli', dnfRisk: '12%' },
      { driver: 'N. Hulkenberg', team: 'Audi/Sauber', code: 'HUL', trend: '🟢 Track Fit', formNote: 'NEW (Tue intel): Finished ahead of grid position last 2 Montreal outings. $5.0M = best budget enabler for chip race. F1 Fantasy Strategist tag: "safest budget pick".', strength: 'Race-craft over-performance vs grid slot', weakness: 'Sauber pace ceiling caps upside', dnfRisk: '7%' }
    ],
    strategyConsiderations: [
      { title: 'Montreal wet contingency (elevated)', detail: 'Race moved to May 24 (earlier than historical June slot) → cooler temps (~13.5°C avg) and HIGHER rain probability per gpblog/canada.gp forecasts. Wet specialists in your stack: NOR, LEC, HAM. Antonelli has zero F1 wet Montreal data — biggest exposure point.' },
      { title: '3x DRS Boost deployment plan (CHIP RACE)', detail: 'Deploy on highest post-qualifying xPts driver. Decision tree: dry + Mercedes upgrade works → ANT 3x. Wet → NOR 3x. Mercedes upgrade flat + dry → keep LEC 3x. Lock decision Saturday post-quali, not before.' },
      { title: 'Mercedes constructor pivot trigger', detail: 'If Mercedes Montreal floor fails to lift pace AND PU concern recurs, swap Mercedes → McLaren constructor before Spain. xPts gap MER 79 → MCL 78 is one bad weekend from flipping.' },
      { title: 'Budget compounding window — Montreal', detail: 'Pre-Monaco still your best window. Targets unchanged: Buy OCO (+$0.38M), HUL (+$0.28M), HAA (+$0.58M). Sell BOR (-$0.49M), STR (-$0.6M), ALO (-$0.6M). Montreal Sprint inflates HUL price fast — buy this week.' },
      { title: 'Sprint format = double scoring', detail: 'Montreal is Sprint weekend per F1 Fantasy Strategist. Your Limitless burn at Miami captured one Sprint; the 3x DRS Boost on Montreal Sprint extends sprint-format edge. Max can\'t match (his 3x already gone).' },
      { title: 'PU-driven DNF jeopardy elevated season-wide', detail: 'NEW (Tue intel): 2026 reliability is differentiator. Field on 2nd/3rd Control Electronics already. Bake +2-3% baseline DNF into sims. Mercedes pair: +5% over baseline until root cause signed off.' }
    ],
    scheduleEvents: [
      { date: 'Sun May 3 — 1pm ET', event: '🚦 Miami GP race (RESCHEDULED · was 4pm)', detail: 'Moved 3hr earlier due to thunderstorm forecast.', urgent: true },
      { date: 'Sun May 3 — 2:30pm ET', event: '🤖 Automatic post-race update fires', detail: 'Scheduled task f1-miami-postrace-update' },
      { date: 'Tue May 5 — 8am', event: '🤖 Weekly intel watcher fires', detail: 'f1-intel-watcher-weekly · 4-day lead before Montreal practice prep window opens' },
      { date: 'Tue May 12 — 8am', event: '🤖 Weekly intel watcher fires', detail: 'Mid-cycle Montreal preview' },
      { date: 'Thu May 21', event: '📅 Pre-Montreal prep · 3x DRS chip plan', detail: 'First-ever Montreal sprint · deploy 3x on highest xPts driver post-quali' },
      { date: 'Fri May 22', event: '🏁 Montreal practice begins', detail: 'Watch FP1 pace + check Mercedes/McLaren upgrade install confirmation' },
      { date: 'Sat-Sun May 23-24', event: '🏎 Montreal Sprint Weekend · CHIP RACE', detail: 'Extra DRS Boost (3x) deployment · Sprint format · rain-elevated forecast' },
      { date: 'Tue May 26 — 8am', event: '🤖 Post-Montreal intel watcher fires', detail: 'Weekly watcher will pivot to Spain prep' }
    ]
  },
  chipPlan: [
    { race: 'Miami', date: 'May 2-3', chip: 'Limitless', status: 'used', sprint: true, detail: 'Burned · 5/5 top grid · projected weekend +180 vs Max' },
    { race: 'Spain', date: 'May 30-Jun 1', chip: 'Hold', status: 'hold', sprint: false, detail: 'Conventional race · save chips' },
    { race: 'Monaco', date: 'Jun 6-8', chip: 'No Negative', status: 'planned', sprint: false, detail: 'Chaos race · DNF prone · qualifying-dominated' },
    { race: 'Spain Catalunya', date: 'Jun', chip: 'Hold', status: 'hold', sprint: false, detail: '' },
    { race: 'Spa', date: 'TBD', chip: 'Autopilot', status: 'planned', sprint: true, detail: 'Belgium often wet · sprint format · Autopilot plays well' },
    { race: 'Silverstone', date: 'Jul', chip: 'Hold', status: 'hold', sprint: false, detail: 'Wildcard candidate if pace shifts mid-season' },
    { race: 'Singapore', date: 'Sep', chip: 'Hold', status: 'hold', sprint: false, detail: 'Avoid Limitless here · structurally risky' },
    { race: 'Brazil', date: 'Nov', chip: 'Backup 3x', status: 'planned', sprint: true, detail: 'Reserve sprint slot for 3x DRS Boost' },
    { race: 'Vegas', date: 'Nov', chip: 'Wildcard', status: 'planned', sprint: false, detail: 'Use-it-or-lose-it · final reset' },
    { race: 'Abu Dhabi', date: 'Dec', chip: 'Final chip', status: 'planned', sprint: false, detail: 'Whatever remains · season finale' }
  ],
  montreal: { race: 'Montreal', date: 'May 22-24', chip: 'Extra DRS Boost (3x)', status: 'next', sprint: true, detail: 'First-ever Montreal sprint · Max can\'t match (3x burned) · target highest xPts driver' },
  risks: [
    { level: 'high', title: 'Heavy rain / lightning halt', prob: '20%', impact: '-90 to -120 pts capped vs E[score]', mitigation: 'No mitigation possible (lineup locked). Lead is wide enough to absorb.' },
    { level: 'med', title: 'Antonelli or Mercedes PU failure', prob: '15%', impact: '-25 to -45 pts', mitigation: 'Max also holds Antonelli — partial offset. Mercedes constructor at risk.' },
    { level: 'med', title: 'Norris first-corner crash from P4', prob: '10%', impact: '-30 pts', mitigation: 'Premium-stacked lineup absorbs single DNF.' },
    { level: 'low', title: 'Max activates Limitless himself for Sunday', prob: '<5%', impact: '+30-60 to him', mitigation: 'Limitless is single-weekend chip; would have applied to whole Miami weekend including sprint. Unlikely now.' }
  ]
};

const RACE_SCHEDULE = {
  race: 'Miami GP',
  round: 6,
  raceStartUTC: '2026-05-03T17:00:00Z',
  raceStartLocalLabel: '1:00 PM ET (rescheduled · thunderstorm avoidance)',
  scheduleChangedAt: '2026-05-02T23:00:00Z',
  changeReason: 'Race moved 3 hours earlier from original 4pm ET start due to expected severe thunderstorms in Miami Gardens during late afternoon. Confirmed by Formula1.com and Sky Sports.'
};
