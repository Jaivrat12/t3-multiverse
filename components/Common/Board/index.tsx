import { cn } from '@nextui-org/react';
import Cell from './Cell';
import Game from '@/types/Game';

type BoardProps = {
    values: Game.Board;
    // eslint-disable-next-line no-unused-vars
    setCell: (row: number, col: number) => void;
};

export default function Board({ values, setCell }: BoardProps) {
    return values.map((row, rowIndex) => (
        <div
            key={rowIndex}
            className="flex justify-center"
        >
            {row.map((col, colIndex) => (
                <div
                    key={colIndex}
                    onClick={() => setCell(rowIndex, colIndex)}
                    className={cn(
                        'p-3',
                        'border-green-500',
                        {
                            'border-r-5': colIndex < 2,
                            'border-b-5': rowIndex < 2,
                        },
                        values[rowIndex][colIndex]
                            ? 'cursor-not-allowed'
                            : 'cursor-pointer',
                    )}
                >
                    <Cell value={col} />
                </div>
            ))}
        </div>
    ));
}
