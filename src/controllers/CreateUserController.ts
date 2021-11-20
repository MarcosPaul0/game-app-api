import { Request, Response } from 'express';
import { User } from '../models/User';
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      is_developer,
      avatar_url
    }: User = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password,
      is_developer,
      avatar_url
    })

    return res.status(200).json(user);
  }
}