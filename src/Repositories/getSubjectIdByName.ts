import { getRepository } from 'typeorm';
import SubjectEntity from '../Entities/subjectEntity';

export async function getSubjectIdByName(subject: string) {
  const subjectsObj = await getRepository(SubjectEntity).find({ name: subject });
  return subjectsObj.map((subjectObj) => subjectObj.getId());
}
