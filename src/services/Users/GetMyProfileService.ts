import { AppError } from "../../errors/AppError";
import prismaClient from "../../prisma";

export class GetMyProfileService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id
      }
    });

    if(!user) {
      throw new AppError('User not found!');
    }

    const { 
      name, 
      email, 
      avatar_url, 
      is_developer 
    } = user;

    return {
      name, 
      email, 
      avatar_url, 
      is_developer 
    };
  }
}