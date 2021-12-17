import * as checkUserService from '../Services/checkUser';
import * as createTokenService from '../Services/createToken';
import * as loginUserRepository from '../Repositories/loginUser';

export async function loginUser(email: string, password: string) {
  const user = await checkUserService.checkUser(email, password);
  if (!user) {
    return null;
  }
  const token = await createTokenService.createToken();
  const session = await loginUserRepository.loginUser(token, user);
  if (!session) {
    return null;
  }
  return token;
}
