import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { readAndParseFile } from './csv-parser';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.post('/convert', async (req: Request, res: Response) => {
  const records = await readAndParseFile()

  res.send(records)
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
