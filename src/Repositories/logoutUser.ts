import { getRepository } from 'typeorm';
import SessionsEntity from '../Entities/sessionEntity';

export async function logoutUser(token: string) {
  console.log(token);
  const session = await getRepository(SessionsEntity).delete({ token });
  return session;
}
