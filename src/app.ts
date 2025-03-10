import { Application, Request, Response } from 'express';

import cors from 'cors';
import express from 'express';
import router from './routes';
import { notFound } from './Middlewares/Not_Found';
import globalErrorHandler from './Middlewares/globalErrorHandlers';

const app: Application = express();

//using middleware
app.use(express.json());

app.use(cors({
  origin:'http://localhost:3000',
  credentials:true,}));

  app.use(express.urlencoded({ extended: true })); //for form data
//using router
app.use('/',router)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(notFound);
app.use(globalErrorHandler);

export default app;