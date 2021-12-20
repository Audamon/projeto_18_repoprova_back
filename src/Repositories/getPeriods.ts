import { getRepository } from 'typeorm';
import PeriodEntity from '../Entities/periodEntity';

export async function getPeriods() {
  const periods = await getRepository(PeriodEntity).find();
  return periods;
}
