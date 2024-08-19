import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Cars } from './entities/cars.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarRepository } from './cars.repository';
import { CarsController } from './cars.controller';
import { GetCarUseCase } from './usecases/find-car.usecase';
import { PostCarUseCase } from './usecases/create-car.usecase';
import { DeleteCarUseCase } from './usecases/delete-car.usecase';
import { UpdateCarUseCase } from './usecases/update-car.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Cars])],
  controllers: [CarsController],
  providers: [
    CarsService,
    GetCarUseCase,
    PostCarUseCase,
    DeleteCarUseCase,
    UpdateCarUseCase,
    CarRepository
  ],
  exports: [
    GetCarUseCase, PostCarUseCase, DeleteCarUseCase, UpdateCarUseCase, CarRepository
  ]
})
export class CarsModule { }