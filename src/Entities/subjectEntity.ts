import {
  Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToOne,
} from 'typeorm';
import PeriodEntity from './periodEntity';
import ProfessorEntity from './professorEntity';
import TestEntity from './testEntity';

@Entity('subject')
export default class SubjectEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    idPeriod: number;

  @Column()
    idProfessor: number;

  @ManyToOne(() => PeriodEntity, (period) => period.id, { eager: true })
  @JoinColumn({ name: 'idPeriod' })
    period: PeriodEntity;

  @OneToOne(() => TestEntity, (test) => test.subject)
    tests: TestEntity;

  @OneToOne(() => ProfessorEntity, (professor) => professor.subject)
    professors: ProfessorEntity;

  getId() {
    return this.id;
  }
}
