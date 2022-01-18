import { AppError } from '../../errors/AppError';
import { Game } from '../../models/Game';
import prismaClient from '../../prisma';

interface IRequestCreateGame {
  name: string;
  developer: string;
  cover_url?: string;
}

export class CreateGameService {
  async execute({ name, developer, cover_url }: IRequestCreateGame): Promise<Game> {
    const game = await prismaClient.game.findFirst({
      where: {
        name,
        developer
      }
    });

    if (game) {
      throw new AppError('Game already exists!');
    }

    const newGame = await prismaClient.game.create({
      data: {
        name,
        developer,
        cover_url
      }
    });

    return newGame;
  }
}