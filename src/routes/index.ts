import Router from 'express';

import { loginRouter } from './login.routes';
import { usersRouter } from './user.routes';
import { gamesRouter } from './game.routes';
import { avaliationsRouter } from './avaliation.routes';
import { likesRouter } from './like.routes';

export const router = Router();

router.use('/login', loginRouter);
router.use('/users', usersRouter);
router.use('/games', gamesRouter);
router.use('/avaliations', avaliationsRouter);
router.use('/likes', likesRouter);