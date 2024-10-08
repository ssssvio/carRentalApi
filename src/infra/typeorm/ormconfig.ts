import 'dotenv/config';
import { Cars } from 'src/modules/cars/entities/cars.entity';
import { Users } from 'src/modules/users/entities/users.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  logging: false,
  entities: [Cars, Users],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  migrationsRun: true,
  subscribers: [],
  extra: {
    trustServerCertificate: true,
  },
});