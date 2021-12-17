import * as getUserByEmailRepository from '../Repositories/getUserByEmail';

export async function getUserByEmail(email: string) {
  const users = await getUserByEmailRepository.getUserByEmail(email);
  return users;
}
