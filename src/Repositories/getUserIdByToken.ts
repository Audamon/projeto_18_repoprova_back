import { getRepository } from 'typeorm';
import SessionsEntity from '../Entities/sessionEntity';

export async function getUserIdByToken(token: string) {
  const sessionsObj = await getRepository(SessionsEntity).find({ token });
  return sessionsObj.map((sessionObj) => sessionObj.getIdUser());
}
