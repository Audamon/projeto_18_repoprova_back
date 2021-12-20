import { Request, Response } from 'express';
import { Tests } from '../Interfaces/testInterface';

export async function postTest(req: Request, res: Response) {
  const { name, category, subject, professor }: Tests = req.body;
  try {
    if (!name || !category || !subject || !professor) {
      return res.sendStatus(400);
    }
    return res.status(201).send();
  } catch (error) {
    return res.sendStatus(500);
  }
}
