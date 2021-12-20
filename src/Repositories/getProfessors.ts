import { getRepository } from 'typeorm';
import ProfessorEntity from '../Entities/professorEntity';

export async function getProfessors() {
  const professors = await getRepository(ProfessorEntity).find();
  return professors;
}
