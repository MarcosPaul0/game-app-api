import Router from 'express';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';

export const loginRouter = Router();

const authenticateUserController = new AuthenticateUserController();

loginRouter.post('/', authenticateUserController.handle);