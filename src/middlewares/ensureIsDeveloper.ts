import { Request, Response, NextFunction } from 'express';
import prismaClient from '../prisma';
import { AppError } from '../errors/AppError';

export async function ensureIsDeveloper(req: Request, res: Response, next: NextFunction) {
  const { is_developer } = await prismaClient.user.findFirst({
    where: {
      id: req.user_id
    }
  })

  if (is_developer) {
    next();
  }

  throw new AppError('You not have permission!');
}