import { Users } from '../Interfaces/userInterface';
import * as createUserRepository from '../Repositories/createUser';
import * as encryptPasswordService from './encryptPassword';

export async function createUser(
  email: string,
  password: string,
  name: string,
): Promise<Users> {
  console.log(3);
  const encryptedPassword = await encryptPasswordService.encryptPassword(password);
  console.log(4);
  const user = await createUserRepository.createUser(email, encryptedPassword, name);
  console.log(5);
  return user;
}
