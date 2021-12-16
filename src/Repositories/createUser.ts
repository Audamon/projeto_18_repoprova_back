import { getRepository } from 'typeorm';
import UserEntity from '../Entities/userEntity';
// import { Users } from '../Interfaces/userInterface';

export async function createUser(email: string, encryptedPassword: string, name: string) {
  const user = await getRepository(UserEntity).query('SELECT * FROM users;');
  console.log(email, encryptedPassword, name);
  console.log(process.env.DATABASE_URL);
  return user;
}
