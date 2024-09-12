import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from './entities/car.entity';
import { CarRepository } from './repositories/car.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity])],
  providers: [CarRepository],
  exports: [TypeOrmModule, CarRepository],
})
export class CarDataModule {}
