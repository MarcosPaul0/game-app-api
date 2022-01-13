import { Request, Response } from 'express';
import { List10AssessmentService } from '../../services/Assessments/List10AssessmentService';

export class List10AssessmentController {
  async handle(req: Request, res: Response): Promise<Response>{
    const { user_id } = req;

    const list10AssessmentService = new List10AssessmentService();

    const assessmentList = list10AssessmentService.execute(user_id);

    return res.json(assessmentList);
  }
}