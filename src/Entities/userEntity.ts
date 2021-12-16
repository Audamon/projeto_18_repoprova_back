import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Users } from '../Interfaces/userInterface';

@Entity('users')
export default class UserEntity implements Users {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    email: string;

  @Column()
    password: string;
}
