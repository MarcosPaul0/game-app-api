import Router from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreateUserController } from '../controllers/Users/CreateUserController';
import { AuthenticateUserController } from '../controllers/Users/AuthenticateUserController';
import { GetMyProfileController } from '../controllers/Users/GetMyProfileController';

const createUserController = new CreateUserController();
const getMyProfileController = new GetMyProfileController();
const authenticateUserController = new AuthenticateUserController();

export const userRouter = Router();

userRouter.post('/register', createUserController.handle);

userRouter.post('/login', authenticateUserController.handle);

userRouter.get('/me', ensureAuthenticated, getMyProfileController.handle);