import { Request, Response} from 'express';
import { RefreshTokenUserService } from '../../services/Users/RefreshTokenUserService';

export class RefreshTokenUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { refreshTokenId } = req.body;

    const refreshTokenUserService = new RefreshTokenUserService();

    const token = await refreshTokenUserService.execute(refreshTokenId);

    return res.json(token);
  }
}