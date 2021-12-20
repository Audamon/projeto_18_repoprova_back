import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne,
} from 'typeorm';
import { Professors } from '../Interfaces/professorInterface';
import SubjectEntity from './subjectEntity';
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

  @OneToOne(() => SubjectEntity, (subject) => subject.professors)
    subject: SubjectEntity;

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
