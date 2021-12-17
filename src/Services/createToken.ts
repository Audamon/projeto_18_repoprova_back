import { v4 as uuid } from 'uuid';

export async function createToken(): Promise<string> {
  const token = await uuid();
  return token;
}
