import { Config } from './config';
import app from './app';
import logger from './config/logger';

const startServer = () => {
    try {
        const PORT = Config.PORT;
        app.listen(PORT, () => {
            logger.info('Server is listening on Port', { port: PORT });
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();
