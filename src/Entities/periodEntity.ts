import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('period')
export default class ProfessorEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  getId() {
    return this.id;
  }

  getPeriod() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
