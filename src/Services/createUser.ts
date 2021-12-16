import { Users } from '../Interfaces/userInterface';
import * as createUserRepository from '../Repositories/createUser';
import * as encryptPasswordService from './encryptPassword';

export async function createUser(
  email: string,
  password: string,
  name: string,
): Promise<Users[]> {
  const encryptedPassword = await encryptPasswordService.encryptPassword(password);
  const user = await createUserRepository.createUser(email, encryptedPassword, name);
  return user;
}
