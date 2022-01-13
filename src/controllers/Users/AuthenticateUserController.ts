import { Request, Response } from 'express';
import { AuthenticateUserService } from '../../services/Users/AuthenticateUserService';

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      email,
      password
    } = req.body;

    const authenticateUserService = new AuthenticateUserService();

    const response = await authenticateUserService.execute({
      email,
      password
    });

    return res.json(response);
  }
}