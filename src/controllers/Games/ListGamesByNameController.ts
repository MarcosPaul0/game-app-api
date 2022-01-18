import { Request, Response } from 'express';
import { ListGamesByNameService } from '../../services/Games/ListGamesByNameService';

export class ListGamesByNameController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const listGamesByNameService = new ListGamesByNameService();

    const gameList = listGamesByNameService.execute(name);
    
    return res.json(gameList);
  }
}