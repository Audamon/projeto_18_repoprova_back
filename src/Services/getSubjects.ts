import * as getProfessorIdByNameService from '../Repositories/getProfessorIdByName';
import * as getSubjectsRepository from '../Repositories/getSubjects';

export async function getSubjects(professor: string) {
  const idProfessor = await getProfessorIdByNameService.getProfessorIdByName(professor);
  const subjects = await getSubjectsRepository.getSubjects(idProfessor[0].getId());
  return subjects;
}
