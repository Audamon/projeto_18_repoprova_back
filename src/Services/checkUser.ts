import * as getUserByEmailService from './getUserByEmail';
import * as checkPasswordService from './checkPassword';

export async function checkUser(email: string, password: string) {
  const user = await getUserByEmailService.getUserByEmail(email);
  console.log(user);
  if (!user[0].email) {
    return null;
  }
  const checkedPassword = await checkPasswordService.checkPassword(
    password,
    user[0].password,
  );
  if (!checkedPassword) {
    return null;
  }
  return user;
}
