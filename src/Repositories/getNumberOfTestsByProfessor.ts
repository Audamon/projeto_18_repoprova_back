import { getRepository } from 'typeorm';
import TestEntity from '../Entities/testEntity';

export async function getNumberOfTestsByProfessor(idProfessor: number) {
  const test = await getRepository(TestEntity).find({ where: { idProfessor } });
  const numberOfTests = test.length;
  return numberOfTests;
}
