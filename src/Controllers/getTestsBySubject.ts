import { Request, Response } from 'express';
import * as getTestsBySubjectService from '../Services/getTestsBySubject';

export async function getTestsBySubject(req: Request, res: Response) {
  const idSubject = Number(req.params.id);
  try {
    const tests = await getTestsBySubjectService.getTestsBySubject(idSubject);
    return res.status(200).send(tests);
  } catch (error) {
    return res.sendStatus(500);
  }
}
