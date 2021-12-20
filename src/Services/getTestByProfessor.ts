import * as getTestsByProfessorRepository from '../Repositories/getTestByProfessor';

export async function getTestByProfessor(idProfessor: number) {
  const tests = await getTestsByProfessorRepository.getTestsByProfessor(
    idProfessor,
  );
  return tests;
}
