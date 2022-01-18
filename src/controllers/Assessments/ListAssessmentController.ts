import { Request, Response } from 'express';
import { ListAssessmentService } from '../../services/Assessments/ListAssessmentService';

export class ListAssessmentController {
  async handle(req: Request, res: Response): Promise<Response>{
    const { user_id } = req;
    const { number } = req.body;

    const listAssessmentService = new ListAssessmentService();

    const assessmentList = listAssessmentService.execute({
      user_id,
      number
    });

    return res.json(assessmentList);
  }
}