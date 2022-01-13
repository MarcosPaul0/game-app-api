import Router from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureIsDeveloper } from '../middlewares/ensureIsDeveloper';

import { CreateGAmeController } from '../controllers/Games/CreateGameController';

export const gamesRouter = Router();

const createGAmeController = new CreateGAmeController();

gamesRouter.post('/create', ensureAuthenticated, ensureIsDeveloper, createGAmeController.handle);