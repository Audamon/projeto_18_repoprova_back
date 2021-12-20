import { getRepository } from 'typeorm';
import ProfessorEntity from '../Entities/professorEntity';

export async function getProfessorIdByName(professor: string) {
  const professorsObj = await getRepository(ProfessorEntity).find({ name: professor });
  return professorsObj;
}
