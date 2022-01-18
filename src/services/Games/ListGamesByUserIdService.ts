import { Game } from "../../models/Game";
import prismaClient from '../../prisma';

export class ListGamesByUserIdService {
  async execute(user_id: string): Promise<Game[]> {
    const gameList = await prismaClient.game.findMany({
      where: {
        developer: user_id
      }
    });

    return gameList;
  }
}