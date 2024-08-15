import { Player } from '@/enums/Game';
import Game from '@/types/Game';

export function getInitialGameState(): Game.State {
    return {
        currentPlayer: Player.X,
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ],
        winner: null,
    };
}

export function getWinner(board: Game.Board): Player | null {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const flattenedBoard = board.flat();
    const check = (player: Player) => (index: number) =>
        flattenedBoard[index] === player;
    for (const line of winningLines) {
        if (line.every(check(Player.X)) || line.every(check(Player.O))) {
            return flattenedBoard[line[0]];
        }
    }

    return null;
}

export function getUpdatedGameState(
    gameState: Game.State,
    row: number,
    col: number
): Game.State {
    if (gameState.winner || gameState.board[row][col]) {
        // TODO: throw using Custom `AppError`
        throw new Error('Illegal Move');
    }

    const newBoard = [...gameState.board];
    newBoard[row][col] = gameState.currentPlayer;

    return {
        board: newBoard,
        currentPlayer:
            gameState.currentPlayer === Player.X ? Player.O : Player.X,
        winner: getWinner(newBoard),
    };
}
