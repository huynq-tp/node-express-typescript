import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import {itemsRouter} from './src/items/items.router';
import {notFoundHandler} from './src/middleware/notFound.middleware';
import {errorHandler} from './src/middleware/error.middleware';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/items', itemsRouter);
app.use(errorHandler);
app.use(notFoundHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server 3');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
