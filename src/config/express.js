import express from 'express';
import bodyParser from 'body-parser';
import routes from '../router';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(bodyParser.json());
app.use(morgan(':url :method'));
app.use(
  cors({
    origin: `${process.env.FRONT_URL}`,
    optionsSuccessStatus: 200,
  })
);
app.use(helmet());
app.use(routes);

export default app;
