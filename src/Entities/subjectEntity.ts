import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('subject')
export default class SubjectEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    idPeriod: number;

  getId() {
    return this.id;
  }
}
