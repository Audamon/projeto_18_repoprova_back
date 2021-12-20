import * as updateNumberOfTestsByProfessorRepository from '../Repositories/updateNumberOfTestsByProfessor';

export async function updateNumberOfTestsByProfessor(idProfessor: number, qtd: number) {
  await updateNumberOfTestsByProfessorRepository.updateNUmberOfTestsByProfessor(
    idProfessor,
    qtd,
  );
}
