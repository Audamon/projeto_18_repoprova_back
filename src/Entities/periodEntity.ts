import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne,
} from 'typeorm';
import SubjectEntity from './subjectEntity';

@Entity('period')
export default class PeriodEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  getId() {
    return this.id;
  }

  @OneToOne(() => SubjectEntity, (subject) => subject.period)
    subjects: SubjectEntity;

  getPeriod() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
