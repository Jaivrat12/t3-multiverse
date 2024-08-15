import { Player as PlayerEnum } from '@/enums/Game';

namespace Game {
    export type Player = PlayerEnum;
    export type Cell = Player | null;
    export type Board = Cell[][];

    export interface State {
        currentPlayer: Player;
        board: Board;
        winner: Player | null;
    }
}

export default Game;
