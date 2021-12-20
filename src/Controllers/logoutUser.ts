import { Request, Response } from 'express';
import * as logoutUserService from '../Services/logoutUser';

export async function logoutUser(req: Request, res: Response) {
  const token: string = req.headers.authorization.replace('Bearer ', '');
  try {
    console.log(token, '   1');
    await logoutUserService.logoutUser(token);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}
