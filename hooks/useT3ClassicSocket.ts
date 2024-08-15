import { useEffect, useState } from 'react';
import useSocket from './useSocket';
import Game from '@/types/Game';

export default function useT3ClassicSocket() {
    const {
        socket,
        isConnected,
    } = useSocket();

    const [players, setPlayers] = useState<string[]>([]);
    const [gameState, setGameState] = useState<Game.State | null>(null);

    const setCell = (row: number, col: number) => {
        socket.emit('setCell', row, col);
    };

    const resetGame = () => {
        socket.emit('resetGame');
    };

    useEffect(() => {
        socket.on('boardUpdate', setGameState);
        socket.on('playersUpdate', setPlayers);

        return () => {
            socket.off('boardUpdate', setGameState);
            socket.off('playersUpdate', setPlayers);
        };
    }, [socket]);

    return {
        socket,
        isConnected,
        players,
        gameState,
        setCell,
        resetGame,
    };
}
