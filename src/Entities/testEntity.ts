import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import ProfessorEntity from './professorEntity';

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
}
