import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne} from 'typeorm';
import { Professors } from '../Interfaces/professorInterface';
import TestEntity from './testEntity';

@Entity('professors')
export default class ProfessorEntity implements Professors {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    qtd: number;

  @OneToOne(() => TestEntity, (test) => test.professor)
    tests: TestEntity;

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
