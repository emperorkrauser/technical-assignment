import { Request, Response, Router } from 'express';
import { AppController } from '../controllers';

export function ApplicationRouter(AppRouter: Router) {
  AppRouter.route('/').get(async (req: Request, res: Response) => {
    const result = await AppController.browse();
    res.send(result);
  });

  AppRouter.route('/:uuid').get(async (req: Request, res: Response) => {
    const { uuid } = req.params;
    const result = await AppController.browseOne(uuid as string);
    res.send(result);
  });

  AppRouter.route('/').post(async (req: Request, res: Response) => {
    const { data } = req.body;
    const result = await AppController.add(data);
    res.send(result);
  });

  AppRouter.route('/:uuid').put(async (req: Request, res: Response) => {
    const { uuid } = req.params;
    const { data } = req.body;
    const result = await AppController.update(uuid as string, data);
    res.send(result);
  });

  AppRouter.route('/:uuid').delete(async (req: Request, res: Response) => {
    const { uuid } = req.params;
    const result = await AppController.delete(uuid);
    res.send(result);
  });
}
