import { Request, Response } from 'express';
import { Game } from '../models/Game';
import { CreateGameService } from '../services/CreateGameService';

export class CreateGAmeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      released_at,
      cover_url,
    }: Game = req.body;

    const developer = req.user_id;

    const dateReleased = new Date(released_at)

    const createGameService = new CreateGameService();

    const game = await createGameService.execute({
      name,
      developer,
      released_at: dateReleased,
      cover_url
    });

    return res.status(200).json(game);
  }

}