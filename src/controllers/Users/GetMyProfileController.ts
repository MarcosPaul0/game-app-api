import { Request, Response } from 'express';
import { GetMyProfileService } from '../../services/Users/GetMyProfileService';

export class GetMyProfileController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id } = req;

    const getMyProfileService = new GetMyProfileService();

    const user = await getMyProfileService.execute(user_id);

    return res.json(user);
  }
}