import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { WEBSOCKET_URL } from '@/env/client-env';
import type { SocketClient } from '@/types/Socket';

const socket: SocketClient = io(WEBSOCKET_URL, {
    autoConnect: false,
});

export default function useSocket() {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        socket.connect();

        socket.on('connect', () => setIsConnected(true));
        socket.on('disconnect', () => setIsConnected(false));

        return () => {
            socket.disconnect();
        };
    }, []);

    return {
        socket,
        isConnected,
    };
}
