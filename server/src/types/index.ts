import { Server } from 'socket.io';
import type {
    ClientToServerEvents,
    InterServerEvents,
    ServerToClientEvents,
    SocketData,
} from '../../../types/Socket.js';

export type SocketServer = Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
>;

export interface PaginationQuery<T> {
    search: string;
    limit: number;
    page: number;
    sort: string;
    sortBy: 'asc' | 'desc';
    filters: Partial<T>;
}
