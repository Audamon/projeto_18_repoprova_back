import { Request, Response } from 'express';
import { Users } from '../Interfaces/userInterface';
import * as createUserService from '../Services/createUser';

export async function createUser(req: Request, res: Response) {
  const { name, email, password }: Users = req.body;
  try {
    console.log(1);
    const user = await createUserService.createUser(name, email, password);
    console.log(2);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
