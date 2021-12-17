import { Request, Response } from 'express';
import { Users } from '../Interfaces/userInterface';
import * as loginUserService from '../Services/loginUser';

export async function loginUser(req: Request, res: Response) {
  const { email, password }: Users = req.body;
  try {
    const token = await loginUserService.loginUser(email, password);
    if (!token) {
      return res.sendStatus(401);
    }
    return res.status(200).send(token);
  } catch (error) {
    return res.sendStatus(500);
  }
}
