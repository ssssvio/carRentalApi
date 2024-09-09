import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { Cars } from 'src/modules/cars/entities/cars.entity';
import { Users } from 'src/modules/users/entities/users.entity';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mssql',
      host: process.env.TYPEORM_HOST,
      port: +process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: false,
      logging: false,
      entities: [Cars, Users],
      retryAttempts: 10,
      retryDelay: 60000,
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      migrationsRun: true,
      subscribers: [],
      extra: {
        trustServerCertificate: true,
      },
    };
  };
};