import Router from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload'; 
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureIsDeveloper } from '../middlewares/ensureIsDeveloper';

import { CreateGameController } from '../controllers/Games/CreateGameController';
import { ListGamesByNameController } from '../controllers/Games/ListGamesByNameController';
import { ListGamesByUserIdController } from '../controllers/Games/ListGamesByUserIdController';

export const gameRouter = Router();

const uploadGame = multer(uploadConfig.upload('./tmp/game'));

const createGameController = new CreateGameController();
const listGamesByNameController = new ListGamesByNameController();
const listGamesByUserIdController = new ListGamesByUserIdController();

gameRouter.post(
  '/create', 
  ensureAuthenticated, 
  ensureIsDeveloper, 
  uploadGame.single('game'), 
  createGameController.handle
);

gameRouter.get('/list', ensureAuthenticated, listGamesByNameController.handle);

gameRouter.get('/myGames', ensureAuthenticated, listGamesByUserIdController.handle);