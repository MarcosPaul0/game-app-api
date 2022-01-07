import { Request, Response, NextFunction } from 'express';
import prismaClient from '../prisma';
import { AppError } from '../errors/AppError';

export async function ensureIsDeveloper(req: Request, res: Response, next: NextFunction) {
  const user = await prismaClient.user.findFirst({
    where: {
      id: req.user_id
    }
  })

  if (!user.is_developer) {
    throw new AppError('You not have permission!');
  }

  next();
}