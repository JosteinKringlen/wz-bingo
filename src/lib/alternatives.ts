export const alternatives: Array<string> = [
    '1st place',
    '2nd place',
    '5 kills',
    'Activates contract',
    'Bunny hop',
    'Camping',
    'Collects free loadout',
    'Completes self revive',
    'Drives vehicle',
    'Gas mask animation',
    'Gets vehicle splat',
    'Lethal equipment kill',
    'Meta kill',
    'Off meta kill',
    'Opens or closes door',
    'Pops dead silence',
    'Pops munitions',
    'Pops plate box',
    'Roze skin',
    'Slide cancel',
    'Uses buy station',
    'Uses killstreak',
    'Uses parachute',
    'Uses zipline',
    "YY'ing",
];

export function getRandomBingoBoard(): Array<string> {
    const random = alternatives.sort(() => 0.5 - Math.random()).slice(0, 25);
    return random;
}
