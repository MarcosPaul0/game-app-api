import { AppError } from "../../errors/AppError";
import { Assessment } from "../../models/Assessment";
import prismaClient from "../../prisma";

export class GetAllAssessmentsService {
  async execute(user_id: string): Promise<Assessment[]> {
    const allAssessment = await prismaClient.assessment.findMany({
      where: {
        user_id
      },
      include: {
        game: true,
        user: false,
        likes: false
      }
    })

    if(!allAssessment) {
      throw new AppError('List error!');
    }

    return allAssessment;
  }
}