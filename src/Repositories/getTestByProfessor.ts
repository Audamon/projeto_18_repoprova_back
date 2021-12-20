import { getRepository } from 'typeorm';
import TestEntity from '../Entities/testEntity';

export async function getTestsByProfessor(idProfessor: number) {
  const tests = await getRepository(TestEntity).find({
    where: { idProfessor },
  });
  return tests.map((test) => test.getTestsByProfessor());
}
