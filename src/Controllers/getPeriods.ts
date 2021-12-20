import { Request, Response } from 'express';
import * as getPeriodsService from '../Services/getPeriods';

export async function getPeriods(req: Request, res: Response) {
  try {
    const periods = await getPeriodsService.getPeriods();
    return res.status(200).send(periods);
  } catch (error) {
    return res.sendStatus(500);
  }
}
