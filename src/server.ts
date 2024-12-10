import { Config } from './config';
import app from './app';

const startServer = () => {
    try {
        const PORT = Config.PORT;
        app.listen(PORT, () => {
            console.log(`Server is listening on Port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();
