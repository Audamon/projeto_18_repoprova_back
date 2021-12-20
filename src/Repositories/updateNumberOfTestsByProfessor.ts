import { getRepository } from 'typeorm';
import ProfessorEntity from '../Entities/professorEntity';

export async function updateNUmberOfTestsByProfessor(
  idProfessor: number,
  qtd: number,
) {
  await getRepository(ProfessorEntity).update(
    { id: idProfessor },
    { qtd: qtd + 1 },
  );
}
