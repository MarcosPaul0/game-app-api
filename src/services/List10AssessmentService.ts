import { AppError } from '../errors/AppError';
import { Assessment } from '../models/Assessment';
import PrismaClient from '../prisma';

export class List10AssessmentService {
  async execute(user_id: string): Promise<Assessment[]> {
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
      take: 10,
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