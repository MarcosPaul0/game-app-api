import { Request, Response} from 'express';
import { RefreshTokenUserService } from '../../services/Users/RefreshTokenUserService';

export class RefreshTokenUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const refresh_token = req.headers.authorization;

    const refreshTokenUserService = new RefreshTokenUserService();

    const token = await refreshTokenUserService.execute(refresh_token);

    return res.json(token);
  }
}