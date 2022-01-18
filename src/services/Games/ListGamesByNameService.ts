import prismaClient from '../../prisma';
import { Game } from '../../models/Game';

export class ListGamesByNameService {
  async execute(name: string): Promise<Game[]> {
    const gameList = await prismaClient.game.findMany({
      where: {
        name
      }
    })

    return gameList;
  }
}