import { getRepository } from 'typeorm';
import UserEntity from '../Entities/userEntity';
import { Users } from '../Interfaces/userInterface';

export async function createUser(email: string, encryptedPassword: string, name: string) {
  const data = {
    email,
    password: encryptedPassword,
    name,
  } as Users;
  const user = await getRepository(UserEntity).create(data);
  await getRepository(UserEntity).save(user);
  return user;
}
