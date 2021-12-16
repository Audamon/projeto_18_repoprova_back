import { getRepository } from 'typeorm';
import UserEntity from '../Entities/userEntity';
import { Users } from '../Interfaces/userInterface';

export async function createUser(email: string, encryptedPassword: string, name: string) {
  console.log(6);
  const t = {
    email,
    password: encryptedPassword,
    name,
  } as Users;
  const user = await getRepository(UserEntity).insert(t);
  return user;
}
