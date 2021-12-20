import * as getPeriodsRepository from '../Repositories/getPeriods';

export async function getPeriods() {
  const periods = await getPeriodsRepository.getPeriods();
  return periods;
}
