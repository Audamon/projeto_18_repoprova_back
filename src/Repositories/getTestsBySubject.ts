import { getRepository } from 'typeorm';
import TestEntity from '../Entities/testEntity';

export async function getTestsBySubject(idSubject: number) {
  const testsObj = await getRepository(TestEntity).find({
    where: { idSubject },
  });
  return testsObj;
}
