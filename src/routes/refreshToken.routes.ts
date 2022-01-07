import { Router } from 'express';
import { RefreshTokenUserController } from '../controllers/RefreshTokenUserController';

export const refreshTokenRouter = Router();

const refreshTokenUserController = new RefreshTokenUserController();

refreshTokenRouter.get('/', refreshTokenUserController.handle);