import { Request, Response } from 'express';
import { Game } from '../../models/Game';
import { CreateGameService } from '../../services/Games/CreateGameService';

export class CreateGameController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name
    }: Game = req.body;

    const { filename, fieldname } = req.file

    const cover_url = `http://localhost:3333/${fieldname}/${filename}`;
    
    const developer = req.user_id;

    const createGameService = new CreateGameService();

    const game = await createGameService.execute({
      name,
      developer,
      cover_url
    });

    return res.status(200).json(game);
  }

}