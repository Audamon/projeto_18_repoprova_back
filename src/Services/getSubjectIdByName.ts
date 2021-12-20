import * as getSubjectIdByNameRepository from '../Repositories/getSubjectIdByName';

export async function getSubjectIdByName(subject: string) {
  const subjectId = await getSubjectIdByNameRepository.getSubjectIdByName(
    subject,
  );
  return subjectId;
}
