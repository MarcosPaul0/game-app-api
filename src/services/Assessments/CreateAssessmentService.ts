import { AppError } from "../../errors/AppError";
import { Assessment } from "../../models/Assessment";
import PrismaClient from '../../prisma';

interface IRequestCreateAssessment {
  user_id: string;
  game_id: string;
  score: number;
}

export class CreateAssessmentService {
  async execute({ user_id, game_id, score }: IRequestCreateAssessment): Promise<Assessment> {
    const assessment = await PrismaClient.assessment.findFirst({
      where: {
        user_id: user_id,
        game_id: game_id,
      }
    })

    if(assessment) {
      throw new AppError('Assessment already exists!');
    }

    const newAssessment = await PrismaClient.assessment.create({
      data: {
        user_id,
        game_id,
        score
      }
    })

    return newAssessment;
  }
}