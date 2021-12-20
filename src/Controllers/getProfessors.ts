import { Request, Response } from 'express';
import * as getProfessorsService from '../Services/getProfessors';

export async function getProfessors(req: Request, res: Response) {
  try {
    const professors = await getProfessorsService.getProfessors();
    return res.status(200).send(professors);
  } catch (error) {
    return res.sendStatus(500);
  }
}
