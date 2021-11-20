import { CreateUserController } from '../controllers/CreateUserController';

import Router from 'express';

const createUserController = new CreateUserController();

export const usersRouter = Router();

usersRouter.get('/', (req, res) => {
  return res.status(200).json({ teste: 'teste'});
})

usersRouter.post('/register', createUserController.handle);