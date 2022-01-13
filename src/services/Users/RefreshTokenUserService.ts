import { AppError } from '../../errors/AppError';
import prismaClient from '../../prisma';
import dayjs from 'dayjs';
import { GenerateTokenProvider } from '../../providers/GenerateTokenProvider';
import { GenerateRefreshTokenProvider } from '../../providers/GenerateRefreshTokenProvider';
import { RefreshToken } from '../../models/RefreshToken';

interface RefreshTokenResponse {
  token: string;
  refreshToken?: RefreshToken;
}

export class RefreshTokenUserService {
  async execute(refresh_token: string): Promise<RefreshTokenResponse> {
    const refreshToken = await prismaClient.refreshToken.findFirst({
      where: {
        id: refresh_token
      }
    });

    if(!refreshToken) {
      throw new AppError('Refresh token invalid!');
    }

    const token = await new GenerateTokenProvider().execute({
      user_id: refreshToken.user_id,
      email: refreshToken.email,
      is_developer: refreshToken.is_developer
    });
    
    const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expires_in));
    
    if(refreshTokenExpired) {
      const newRefreshToken = await new GenerateRefreshTokenProvider().execute({
        user_id: refreshToken.user_id,
        email: refreshToken.email,
        is_developer: refreshToken.is_developer
      });

      return { 
        token, 
        refreshToken: newRefreshToken
      }
    }

    return { token };
  }
}