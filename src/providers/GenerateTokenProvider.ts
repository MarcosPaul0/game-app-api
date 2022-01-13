import { sign } from "jsonwebtoken";

interface GenerateTokenRequest {
  user_id: string;
  email: string;
  is_developer: boolean;
}

export class GenerateTokenProvider {
  async execute({ user_id, email, is_developer }: GenerateTokenRequest): Promise<string> {
    const token = sign({
      email,
      is_developer
    }, process.env.TOKEN_SECRET_KEY, {
      subject: user_id,
      expiresIn: '15m'
    })

    return token;
  }
}