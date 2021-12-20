import { Request, Response } from 'express';
import * as getTestsByProfessorService from '../Services/getTestByProfessor';

export async function getTestsByProfessor(req: Request, res: Response) {
  const idProfessor = Number(req.params.id);
  try {
    const tests = await getTestsByProfessorService.getTestByProfessor(
      idProfessor,
    );
    return res.status(200).send(tests);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
