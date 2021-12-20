import * as getSubjectByPeriodRepository from '../Repositories/getSubjectsByPeriod';

export async function getSubjectByPeriod(idPeriod: number) {
  const subjects = await getSubjectByPeriodRepository.getSubjectsByPeriod(
    idPeriod,
  );
  return subjects;
}
