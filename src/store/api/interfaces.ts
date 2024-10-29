export interface Lobby {
    id: string;
    title: string;
    description: string;
    players: Player[];
}

export interface Player {
    username: string;
}