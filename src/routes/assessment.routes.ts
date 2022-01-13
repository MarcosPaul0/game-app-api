import Router from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreateAssessmentController } from '../controllers/Assessments/CreateAssessmentController';
import { List10AssessmentController } from '../controllers/Assessments/List10AssessmentController';
import { GetAllAssessmentsController } from '../controllers/Assessments/GetAllAssessmentsController';

export const assessmentRouter = Router();

const createAssessmentController = new CreateAssessmentController();
const list10AssessmentController = new List10AssessmentController();
const getAllAssessmentsController = new GetAllAssessmentsController();

assessmentRouter.post('/', ensureAuthenticated, createAssessmentController.handle);

assessmentRouter.get('/last10', ensureAuthenticated, list10AssessmentController.handle);

assessmentRouter.get('/myAssessments', ensureAuthenticated, getAllAssessmentsController.handle);