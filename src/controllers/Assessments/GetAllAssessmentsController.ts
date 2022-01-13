import { Request, Response } from 'express';
import { GetAllAssessmentsService } from '../../services/Assessments/GetAllAssessmentsService';

export class GetAllAssessmentsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id } = req;

    const getAllAssessmentsService = new GetAllAssessmentsService();

    const allAssessment = await getAllAssessmentsService.execute(user_id);

    return res.json(allAssessment);
  }
}