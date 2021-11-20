import prismaClient from '../prisma';
import { hash } from 'bcryptjs';
import { User } from '../models/User';
import { AppError } from '../errors/AppError'

interface IRequestCreateUser {
  name: string;
  email: string;
  password: string;
  avatar_url: string;
}

export class CreateUserService {
  async execute({name, email, password, avatar_url = '#'}: IRequestCreateUser): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: { email }
    });

    if (!user) {
      const passwordHash = await hash(password, 8);

      const newUser = await prismaClient.user.create({
        data: {
          name,
          email,
          password: passwordHash,
          avatar_url
        }
      });

      return newUser
    }

    throw new AppError('User already exists!');
  }
}