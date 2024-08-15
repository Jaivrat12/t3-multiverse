'use client';

import { Chip, Spinner } from '@nextui-org/react';
import T3ClassicGameUI from './T3ClassicGameUI';
import useT3ClassicSocket from '@/hooks/useT3ClassicSocket';

export default function T3ClassicOnline() {
    const {
        isConnected,
        players,
        gameState,
        setCell,
        resetGame,
    } = useT3ClassicSocket();

    return (
        <div className="container">
            <h1 className="pt-3 text-4xl text-center">
                T3 Classic
            </h1>

            <div className="py-2 pb-6 text-center">
                <Chip
                    size="sm"
                    variant="dot"
                    color={isConnected ? 'success' : 'danger'}
                >
                    {isConnected ? `${players.length} Online` : 'Connecting...'}
                </Chip>
            </div>

            {gameState ? (
                <T3ClassicGameUI
                    gameState={gameState}
                    setCell={setCell}
                    resetGame={resetGame}
                />
            ) : (
                <div className="h-[400px]">
                    <div className="text-center">
                        <Spinner
                            size="lg"
                            label="Loading Game"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
