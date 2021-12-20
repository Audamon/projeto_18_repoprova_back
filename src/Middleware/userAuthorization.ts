import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import SessionsEntity from '../Entities/sessionEntity';

export async function userAuthorization(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization.replace('Bearer ', '');
  console.log(token);
  const repository = getRepository(SessionsEntity);
  const session = await repository.findOne({ token });
  console.log(session);
  if (!session.token) {
    return res.sendStatus(401);
  }

  next();
}
