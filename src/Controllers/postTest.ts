import { Request, Response } from 'express';
import { Tests } from '../Interfaces/testInterface';
import * as postTestServices from '../Services/postTest';

export async function postTest(req: Request, res: Response) {
  const {
    name, type, subject, professor, url, pdf,
  }: Tests = req.body;
  const token: string = req.headers.authorization.replace('Bearer ', '');
  try {
    if (!name || !type || !subject || !professor || !url || !pdf) {
      return res.sendStatus(400);
    }
    const test = await postTestServices.postTest(
      name,
      subject,
      type,
      professor,
      url,
      token,
      pdf,
    );
    if (!test) {
      return res.sendStatus(400);
    }
    return res.status(201).send(test);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
