import { getRepository } from 'typeorm';
import SubjectEntity from '../Entities/subjectEntity';

export async function getSubjectsByPeriod(idPeriod: number) {
  const subjectsObj = await getRepository(SubjectEntity).find({ idPeriod });
  return subjectsObj;
}
