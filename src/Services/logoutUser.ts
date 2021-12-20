import * as logoutUserRepository from '../Repositories/logoutUser';

export async function logoutUser(token: string) {
  const session = await logoutUserRepository.logoutUser(token);
  console.log(session)
}
