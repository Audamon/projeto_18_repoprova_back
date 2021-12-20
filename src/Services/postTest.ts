import * as postTestRepository from '../Repositories/postTest';
import * as getUserIdByTokenService from './getUserIdByToken';
import * as getProfessorIdByNameService from './getProfessorIdByName';
import * as getSubjectIdByNameService from './getSubjectIdByName';

export async function postTest(
  name: string,
  subject: string,
  type: string,
  professor: string,
  url: string,
  token: string,
  pdf: string,
) {
  const idUser = await getUserIdByTokenService.getUserIdByToken(token);
  const idProfessor = await getProfessorIdByNameService.getProfessorIdByName(professor);
  const idSubject = await getSubjectIdByNameService.getSubjectIdByName(subject);
  const test = await postTestRepository.postTest(name, idSubject[0], type, idProfessor[0], url, idUser[0], pdf);
  return test;
}
