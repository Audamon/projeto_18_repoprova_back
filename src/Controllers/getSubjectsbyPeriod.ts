import { Request, Response } from 'express';
import * as getSubjectsByPeriodService from '../Services/getSubjectsByPeriod';

export async function getSubjectsByPeriod(req: Request, res: Response) {
  const idPeriod = Number(req.params.id);
  try {
    const subjects = await getSubjectsByPeriodService.getSubjectByPeriod(idPeriod);
    return res.status(200).send(subjects);
  } catch (error) {
    return res.sendStatus(500);
  }
}
