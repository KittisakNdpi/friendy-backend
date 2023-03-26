import express, { Application, Request, Response } from 'express';

const server: Application = express();

const PORT: number = 3000;

server.get('/', (req: Request, res: Response) => res.send('Express + TypeScript Server'));

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});