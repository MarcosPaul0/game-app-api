import { AppError } from '../../errors/AppError';
import { Assessment } from '../../models/Assessment';
import PrismaClient from '../../prisma';

interface ListAssessmentsRequest {
  user_id: string;
  number: number;
}

export class ListAssessmentService {
  async execute({ user_id, number }: ListAssessmentsRequest): Promise<Assessment[]> {
    const assessmentList = await PrismaClient.assessment.findMany({
      where: {
        NOT: {
          user_id
        }
      },
      orderBy: [
        {
          created_at: 'desc'
        }
      ],
      take: number,
      include: {
        game: true,
        user: false,
        likes: false
      }
    });

    if(!assessmentList) {
      throw new AppError('List error!');
    }

    return assessmentList;
  }
}