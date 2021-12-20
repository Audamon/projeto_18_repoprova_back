import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import SessionsEntity from '../Entities/sessionEntity';

export async function userAuthorization(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization.replace('Bearer ', '');

  const repository = getRepository(SessionsEntity);
  const session = await repository.findOne({ token });

  if (!session) {
    return res.sendStatus(401);
  }

  next();
}
