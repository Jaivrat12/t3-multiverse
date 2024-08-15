/* eslint-disable no-unused-vars */

import { Socket } from 'socket.io-client';
import Game from './Game';

export interface ServerToClientEvents {
    playersUpdate: (players: string[]) => void;
    boardUpdate: (game: Game.State) => void;
}

export interface ClientToServerEvents {
    setCell: (row: number, col: number) => void;
    resetGame: () => void;
}

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    name: string;
    age: number;
}

export type SocketClient = Socket<ServerToClientEvents, ClientToServerEvents>
