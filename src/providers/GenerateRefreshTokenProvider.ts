import { RefreshToken } from "../models/RefreshToken";
import dayjs from 'dayjs';
import prismaClient from "../prisma";

interface GenerateRefreshTokenRequest {
  user_id: string;
  email: string;
}

export class GenerateRefreshTokenProvider {
  async execute({ user_id, email }: GenerateRefreshTokenRequest): Promise<RefreshToken> {
    await prismaClient.refreshToken.deleteMany({
      where: {
        user_id: user_id
      }
    });

    const expires_in = dayjs().add(15, 'day').unix();

    const refreshToken = await prismaClient.refreshToken.create({
      data: {
        user_id,
        email,
        expires_in
      }
    });

    return refreshToken; 
  }
}