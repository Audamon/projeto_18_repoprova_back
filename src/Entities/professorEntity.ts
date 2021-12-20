import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Professors } from '../Interfaces/professorInterface';

@Entity('professors')
export default class ProfessorEntity implements Professors {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    qtd: number;

  getId() {
    return this.id;
  }

  getProfessors() {
    return {
      id: this.id,
      name: this.name,
      qtd: this.qtd,
    };
  }
}
