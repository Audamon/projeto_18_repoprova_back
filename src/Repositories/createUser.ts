import { getManager } from 'typeorm';
// import UserEntity from '../Entities/userEntity';
// import { Users } from '../Interfaces/userInterface';

export async function createUser(email: string, encryptedPassword: string, name: string) {
  console.log(6);
  const user = await getManager().query('INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETUIRNING*;', [name, encryptedPassword, email]);
  return user;
}
