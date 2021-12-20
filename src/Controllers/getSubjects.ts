import { Request, Response } from 'express';
import * as getSubjectsService from '../Services/getSubjects';

export async function getSubjects(req: Request, res: Response) {
  const { professor } = req.params;
  try {
    const subjects = await getSubjectsService.getSubjects(professor);
    return res.status(200).send(subjects);
  } catch (err) {
    return res.sendStatus(500);
  }
}
