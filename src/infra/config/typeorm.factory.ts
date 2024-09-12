import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

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
      retryAttempts: 10,
      retryDelay: 25000,
      entities: [
        //inject all entities
        'dist/src/modules/**/entities/*.entity{.ts,.js}',
        'dist/src/data/**/entities/*.entity{.ts,.js}',
      ],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      migrationsRun: true,
      subscribers: [],
      extra: {
        trustServerCertificate: true,
      },
    };
  }
}
