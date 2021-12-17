import { getRepository } from 'typeorm';
import UserEntity from '../Entities/userEntity';
import { Users } from '../Interfaces/userInterface';

export async function getUserByEmail(email: string): Promise<Users[]> {
  const user = await getRepository(UserEntity).find({
    where: { email },
  });
  return user;
}
