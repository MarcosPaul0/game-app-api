import Router from 'express';

import { refreshTokenRouter } from './refreshToken.routes';
import { userRouter } from './user.routes';
import { gameRouter } from './game.routes';
import { assessmentRouter } from './assessment.routes';
import { likeRouter } from './like.routes';

export const router = Router();

router.use('/refreshToken', refreshTokenRouter);
router.use('/users', userRouter);
router.use('/games', gameRouter);
router.use('/assessments', assessmentRouter);
router.use('/likes', likeRouter);