import { CarDataModule } from '@data/cars';
import { Module } from '@nestjs/common';
import { CarRepository } from '../../data/cars/repositories/car.repository';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { ICarsService } from './cars.service.interface';
import {
  DeleteCarUseCase,
  GetCarUseCase,
  PostCarUseCase,
  PutCarUseCase,
} from './usecases';

@Module({
  imports: [CarDataModule],
  controllers: [CarsController],
  providers: [
    CarsService,
    GetCarUseCase,
    PostCarUseCase,
    DeleteCarUseCase,
    PutCarUseCase,
    CarRepository,
    //Omiti a implementação do controller
    {
      provide: ICarsService,
      useClass: CarsService,
    },
  ],
})
export class CarsModule {}
