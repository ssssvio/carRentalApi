import { Module } from '@nestjs/common';
import { CarsModule } from './modules/cars';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './common/auth/auth.module';
import { TypeOrmConfig } from './infra/config/typeorm.factory';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig
    }),
    UsersModule,
    CarsModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }