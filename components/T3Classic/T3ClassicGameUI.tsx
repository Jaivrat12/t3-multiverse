import { Button, cn } from '@nextui-org/react';
import { FaRotateRight } from 'react-icons/fa6';
import Board from '../Common/Board';
import { Player } from '@/enums/Game';
import Game from '@/types/Game';

type T3ClassicGameUIProps = {
    gameState: Game.State;
    // eslint-disable-next-line no-unused-vars
    setCell: (row: number, col: number) => void;
    resetGame: () => void;
};

export default function T3ClassicGameUI({
    gameState: { board, currentPlayer, winner },
    setCell,
    resetGame,
}: T3ClassicGameUIProps) {
    return (
        <div className="flex flex-col items-center">
            <p
                className={cn(
                    'mb-6 text-2xl',
                    (winner ?? currentPlayer) === Player.X
                        ? 'text-red-500'
                        : 'text-blue-500'
                )}
            >
                {winner
                    ? `Player ${winner} won!`
                    : `${currentPlayer} Turn`}
            </p>

            <Board
                values={board}
                setCell={setCell}
            />

            <Button
                variant="solid"
                color="primary"
                onClick={resetGame}
                className="mt-8"
                startContent={<FaRotateRight />}
            >
                Reset
            </Button>
        </div>
    );
}
