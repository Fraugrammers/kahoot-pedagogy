export interface Lobby {
    _id: string;
    title: string;
    code: number;
    description: string;
    players: Player[];
    tasks: Task[];
}

export interface Player {
    _id: string;
    username: string;
}

export interface Task {
    _id: string;
    title: string;
}