import * as getUserIdByTokenRepository from '../Repositories/getUserIdByToken';

export async function getUserIdByToken(token: string) {
  const userId = await getUserIdByTokenRepository.getUserIdByToken(token);
  return userId;
}
