import Router from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreateUserController } from '../controllers/Users/CreateUserController';
import { AuthenticateUserController } from '../controllers/Users/AuthenticateUserController';
import { GetMyProfileController } from '../controllers/Users/GetMyProfileController';

const createUserController = new CreateUserController();
const getMyProfileController = new GetMyProfileController();
const authenticateUserController = new AuthenticateUserController();

export const usersRouter = Router();

usersRouter.post('/register', createUserController.handle);

usersRouter.post('/login', authenticateUserController.handle);

usersRouter.get('/me', ensureAuthenticated, getMyProfileController.handle);