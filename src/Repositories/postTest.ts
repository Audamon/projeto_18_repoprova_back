import { getRepository } from 'typeorm';
import TestEntity from '../Entities/testEntity';

export async function postTest(
  name: string,
  idSubject: number,
  type: string,
  idProfessor: number,
  url: string,
  idUser: number,
  pdf: string,
) {
  const testObj = {
    name,
    idSubject,
    type,
    idProfessor,
    url,
    idUser,
    pdf,
  };
  const test = await getRepository(TestEntity).create(testObj);
  await getRepository(TestEntity).save(test);
  return test;
}
