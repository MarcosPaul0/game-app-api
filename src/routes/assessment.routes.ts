import Router from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreateAssessmentController } from '../controllers/Assessments/CreateAssessmentController';
import { ListAssessmentController } from '../controllers/Assessments/ListAssessmentController';
import { GetAllAssessmentsController } from '../controllers/Assessments/GetAllAssessmentsController';

export const assessmentRouter = Router();

const createAssessmentController = new CreateAssessmentController();
const listAssessmentController = new ListAssessmentController();
const getAllAssessmentsController = new GetAllAssessmentsController();

assessmentRouter.post('/', ensureAuthenticated, createAssessmentController.handle);

assessmentRouter.post('/list', ensureAuthenticated, listAssessmentController.handle);

assessmentRouter.get('/my', ensureAuthenticated, getAllAssessmentsController.handle);