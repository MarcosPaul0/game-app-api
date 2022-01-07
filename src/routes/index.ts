import Router from 'express';

import { loginRouter } from './login.routes';
import { refreshTokenRouter } from './refreshToken.routes';
import { usersRouter } from './user.routes';
import { gamesRouter } from './game.routes';
import { assessmentRouter } from './assessment.routes';
import { likesRouter } from './like.routes';

export const router = Router();

router.use('/login', loginRouter);
router.use('/refreshToken', refreshTokenRouter);
router.use('/users', usersRouter);
router.use('/games', gamesRouter);
router.use('/assessment', assessmentRouter);
router.use('/likes', likesRouter);