import { Request, Response } from 'express';
import { ListGamesByUserIdService } from '../../services/Games/ListGamesByUserIdService';

export class ListGamesByUserIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id } = req;

    const listGamesByUserIdService = new ListGamesByUserIdService();

    const result = await listGamesByUserIdService.execute(user_id);

    return res.json(result);
  }
}