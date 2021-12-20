import * as getTestsBySubjectRepository from '../Repositories/getTestsBySubject';

export async function getTestsBySubject(idSubject: number) {
  const tests = await getTestsBySubjectRepository.getTestsBySubject(idSubject);
  return tests.map((test) => test.getTestsBySubject());
}
