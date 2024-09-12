import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { AuthModule } from './common/auth/auth.module';
import { TypeOrmConfig } from './infra/config/typeorm.factory';
import { CarsModule } from './modules/cars';
import { UsersModule } from './modules/users';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => config()],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
    }),
    UsersModule,
    CarsModule,
    AuthModule, //move para camada de app pasta modules
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
