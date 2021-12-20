import { getRepository } from 'typeorm';
import SubjectEntity from '../Entities/subjectEntity';

export async function getSubjects(idProfessor: number) {
  const subjects = await getRepository(SubjectEntity).find({ idProfessor });
  return subjects;
}
