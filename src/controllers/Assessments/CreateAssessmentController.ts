import { Request, Response } from 'express';
import { CreateAssessmentService } from '../../services/Assessments/CreateAssessmentService';

export class CreateAssessmentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { 
      game_id,
      score
    } = req.body;
    
    const user_id = req.user_id;
    
    const createAssessmentService = new CreateAssessmentService();

    const assessment = await createAssessmentService.execute({
      user_id,
      game_id,
      score
    });

    return res.status(200).json(assessment);
  }
}