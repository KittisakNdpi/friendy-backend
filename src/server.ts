// import lib
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const SERVER: Application = express();
const HOST_NAME: string = process.env.HOST_NAME ?? '';
const PORT: number = Number(process.env.PORT ?? '');

SERVER.use(bodyParser.json());
SERVER.use(bodyParser.urlencoded({ extended: true }));

SERVER.get('/', (req: Request, res: Response) => res.send('Express + TypeScript SERVER'));

SERVER.listen(PORT, HOST_NAME, () => {
    console.log(`server is running at http://${HOST_NAME}:${PORT}`);
});