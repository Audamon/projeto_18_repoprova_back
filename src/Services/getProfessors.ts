import * as getProfessorsRepository from '../Repositories/getProfessors';

export async function getProfessors() {
  const professors = await getProfessorsRepository.getProfessors();
  return professors.map((professor) => professor.getProfessors());
}
