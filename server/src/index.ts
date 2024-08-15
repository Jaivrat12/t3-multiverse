import 'dotenv/config';

import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import initializeWebSocket from './websocket.js';
import apiRoutes from './routes/index.js';
import globalErrorHandler from './middlewares/error.middleware.js';
import logger from './utils/logger.js';
import type { SocketServer } from './types/index.js';

const app = express();

const server = http.createServer(app);
const io: SocketServer = new Server(server, {
    cors: {
        origin: '*',
        // methods: ['GET', 'POST'],
    },
});
initializeWebSocket(io);

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    const sockets = await io.fetchSockets();
    const socketIds = sockets.map(({ id }) => id);
    res.json({
        status: 'ok',
        socketIds,
    });
});

app.use('/api', apiRoutes);

app.use(globalErrorHandler);

const { PORT, MONGODB_URL } = process.env;
try {
    await mongoose.connect(MONGODB_URL!);
    server.listen(PORT, () => {
        logger.info(`Server started on port ${PORT}`);
    });
} catch (error) {
    logger.error(error);
    process.exit(1);
}
