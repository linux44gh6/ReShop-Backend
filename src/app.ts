import { Application, Request, Response } from 'express';

import cors from 'cors';
import express from 'express';
import router from './routes';

const app: Application = express();

//using middleware
app.use(express.json());

//using router
app.use('/',router)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});



export default app;