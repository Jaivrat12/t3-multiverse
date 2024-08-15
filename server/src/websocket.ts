import {
    getInitialGameState,
    getUpdatedGameState,
} from '../../lib/games/T3ClassicGame.js';
import type { SocketServer } from './types/index.js';

// TODO: https://socket.io/how-to/use-with-react
// TODO: https://socket.io/how-to/use-with-nextjs
// TODO: https://socket.io/docs/v4/emit-cheatsheet/
// TODO: https://socket.io/get-started/private-messaging-part-1/

const getSockets = async (io: SocketServer) => {
    const sockets = await io.fetchSockets();
    return sockets.map(({ id }) => id);
};

export default function initializeWebSocket(io: SocketServer) {
    let gameState = getInitialGameState();

    const emitPlayersUpdate = async () =>
        io.emit('playersUpdate', await getSockets(io));

    const emitBoardUpdate = () => io.emit('boardUpdate', gameState);

    io.on('connection', async (socket) => {
        // console.log(`${socket.id} connected`);

        emitPlayersUpdate();
        socket.emit('boardUpdate', gameState);

        socket.on('setCell', (row, col) => {
            try {
                gameState = getUpdatedGameState(gameState, row, col);
                emitBoardUpdate();
            } catch (err) {}
        });

        socket.on('resetGame', () => {
            gameState = getInitialGameState();
            emitBoardUpdate();
        });

        socket.on('disconnect', async (/* reason, description */) => {
            // console.log(`${socket.id} disconnected`, {
            //     reason,
            //     description,
            // });
            emitPlayersUpdate();
        });
    });
}
