import { getRepository } from 'typeorm';
import { Users } from '../Interfaces/userInterface';
import SessionsEntity from '../Entities/sessionEntity';

export async function loginUser(token: string, user: Users[]) {
  const data = {
    token,
    idUser: user[0].id,
  };
  const session = await getRepository(SessionsEntity).create(data);
  await getRepository(SessionsEntity).save(session);
  return session;
}
