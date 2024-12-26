// import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import logger from './config/logger';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Helloooooo');
});

app.post(
    '/auth/register',
    (req: Request, res: Response, next: NextFunction) => {
        res.status(201).send();

        next();
    },
);

// GLobal  Error Handling, , neccessary to have 4 parameters
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                message: err.message,
                path: '',
                location: '',
            },
        ],
    });
});

export default app;
