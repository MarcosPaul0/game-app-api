import prismaClient from '../../prisma';
import { compare } from 'bcryptjs';
import { AppError } from '../../errors/AppError';
import { GenerateTokenProvider } from '../../providers/GenerateTokenProvider';
import { GenerateRefreshTokenProvider } from '../../providers/GenerateRefreshTokenProvider';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const user = await prismaClient.user.findFirst({
      where: { email }
    })

    if (!user) {
      throw new AppError('Email/password incorrect!');
    }

    const passwordMatch = await compare(password, user.password); //recebido, já registrado

    if (!passwordMatch) {
      throw new AppError('Email/password incorrect!');
    }

    const token = await new GenerateTokenProvider().execute({
      user_id: user.id,
      email,
      is_developer: user.is_developer
    });

    const refreshToken = await new GenerateRefreshTokenProvider().execute({
      user_id: user.id,
      email: email,
      is_developer: user.is_developer
    });

    return { 
      token, 
      refreshToken,
      user: {
        name: user.name,
        email: user.email,
        avatar_url: user.avatar_url,
        is_developer: user.is_developer
      }
    };
  }
}