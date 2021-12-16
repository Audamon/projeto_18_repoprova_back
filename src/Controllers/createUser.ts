import { Request, Response } from 'express';
import { Users } from '../Interfaces/userInterface';
import * as createUserService from '../Services/createUser';

export async function createUser(req: Request, res: Response) {
  const { name, email, password }: Users = req.body;
  try {
    const user = await createUserService.createUser(name, email, password);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).send(error);
  }
}
