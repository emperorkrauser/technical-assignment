import express, {Router} from 'express';
import { AppController } from './controllers';
import { ApplicationRouter } from './routes';

const port = 3001;
const app = express();
const AppRouter = Router();

app.use(express.json());
app.use(express.urlencoded());

app.use('/api', AppRouter);

ApplicationRouter(AppRouter);


app.listen(port, () => {
  console.log(`Server running at ${port}`)
})
