<<<<<<< HEAD
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
=======
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
>>>>>>> resart-part

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
<<<<<<< HEAD
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
=======
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
>>>>>>> resart-part
  const a = 10;
  res.send(a);
};

<<<<<<< HEAD
app.get('/', getAController);
=======
app.get('/', test);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);
>>>>>>> resart-part

export default app;
