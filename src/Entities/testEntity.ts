import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import ProfessorEntity from './professorEntity';
import SubjectEntity from './subjectEntity';

@Entity('test')
export default class TestEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    idUser: number;

  @Column()
    name: string;

  @Column()
    type: string;

  @Column()
    idSubject: number;

  @Column()
    idProfessor: number;

  @Column()
    url: string;

  @Column()
    pdf: string;

  @ManyToOne(() => ProfessorEntity, (professor) => professor.id, {
    eager: true,
  })
  @JoinColumn({ name: 'idProfessor' })
    professor: ProfessorEntity;

  @ManyToOne(() => SubjectEntity, (subject) => subject.id, {
    eager: true,
  })
  @JoinColumn({ name: 'idSubject' })
    subject: SubjectEntity;

  getTestsByProfessor() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      url: this.url,
      professor: {
        name: this.professor.name,
      },
      subject: {
        name: this.subject.name,
        period: this.subject.period.name,
      },
    };
  }

  getTestsBySubject() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      url: this.url,
      professor: {
        name: this.professor.name,
      },
      subject: {
        name: this.subject.name,
        period: this.subject.period.name,
      },
    };
  }
}
