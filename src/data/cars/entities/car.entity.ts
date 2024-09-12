import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
export class CarEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  year: number;

  @Column()
  color: string;

  @Column()
  price: number;

  @Column({ default: false })
  rented: boolean;
}
