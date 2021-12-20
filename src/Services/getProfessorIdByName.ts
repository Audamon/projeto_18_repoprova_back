import * as getProfessorIdByNameRepository from '../Repositories/getProfessorIdByName';
import * as updateNumberOfTestsByProfessorService from './updateNumberOfTestsByProfessor';

export async function getProfessorIdByName(professor: string) {
  const professorsObj = await getProfessorIdByNameRepository.getProfessorIdByName(
    professor,
  );
  if (!professorsObj) {
    return null;
  }
  await updateNumberOfTestsByProfessorService.updateNumberOfTestsByProfessor(professorsObj[0].id, professorsObj[0].qtd);
  return professorsObj.map((professorObj) => professorObj.getId());
}
