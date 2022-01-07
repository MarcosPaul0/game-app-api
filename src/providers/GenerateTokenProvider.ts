import { sign } from "jsonwebtoken";

interface GenerateTokenRequest {
  user_id: string;
  email: string;
}

export class GenerateTokenProvider {
  async execute({ user_id, email }: GenerateTokenRequest): Promise<string> {
    const token = sign({
      email: email
    }, process.env.TOKEN_SECRET_KEY, {
      subject: user_id,
      expiresIn: '15m'
    })

    return token;
  }
}