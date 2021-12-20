import * as getNumberOfTestsByProfessorRepository from '../Repositories/getNumberOfTestsByProfessor';

export async function getNumberOfTestsByProfessor(idProfessor: number) {
  const numberOfTests = await getNumberOfTestsByProfessorRepository.getNumberOfTestsByProfessor(
    idProfessor,
  );
  return numberOfTests;
}
