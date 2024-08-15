'use client';

import { useState } from 'react';
import { Chip } from '@nextui-org/react';
import T3ClassicGameUI from './T3ClassicGameUI';
import { getInitialGameState, getUpdatedGameState } from '@/lib/games/T3ClassicGame';
import Game from '@/types/Game';

export default function T3ClassicOffline() {
    const [gameState, setGameState] = useState<Game.State>(getInitialGameState);

    const setCell = (row: number, col: number) => {
        try {
            const updatedState = getUpdatedGameState(gameState, row, col);
            setGameState(updatedState);
        } catch (err) {}
    };

    const resetGame = () => {
        setGameState(getInitialGameState);
    };

    return (
        <div className="container">
            <h1 className="pt-3 text-4xl text-center">
                T3 Classic
            </h1>

            <div className="py-2 text-center">
                <Chip
                    size="sm"
                    variant="faded"
                    color="primary"
                >
                    Offline Mode
                </Chip>
            </div>

            <T3ClassicGameUI
                gameState={gameState}
                setCell={setCell}
                resetGame={resetGame}
            />
        </div>
    );
}
