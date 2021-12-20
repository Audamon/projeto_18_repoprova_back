import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
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

  @OneToMany(() => TestEntity, (test) => test.professor)
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
