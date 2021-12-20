import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
