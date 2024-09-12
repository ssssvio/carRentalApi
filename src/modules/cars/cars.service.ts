import { Injectable } from '@nestjs/common';
import { CarEntity } from '../../data/cars/entities/car.entity';
import { ICarsService } from './cars.service.interface';
import { GetCarDto } from './dto';
import { CarDto } from './dto/post-car-dto';
import { DeleteCarUseCase } from './usecases/delete-car.usecase';
import { GetCarUseCase } from './usecases/get-car.usecase';
import { PostCarUseCase } from './usecases/post-car.usecase';
import { PutCarUseCase } from './usecases/put-car.usecase';

//DPI (Inversao de dependencias)
@Injectable()
export class CarsService implements ICarsService {
  constructor(
    private readonly postCarUseCase: PostCarUseCase,
    private readonly getCarUseCase: GetCarUseCase,
    private readonly deleteCarUseCase: DeleteCarUseCase,
    private readonly updateCarUseCase: PutCarUseCase,
  ) {}

  createCar(data: CarDto): Promise<CarEntity> {
    return this.postCarUseCase.execute(data);
  }

  findCars(query: GetCarDto): Promise<CarEntity[]> {
    return this.getCarUseCase.execute(query);
  }

  findCarById(id: number): Promise<CarEntity> {
    return this.getCarUseCase.executeById(id);
  }

  removeCar(id: number): Promise<void> {
    return this.deleteCarUseCase.execute(id);
  }

  updateCar(id: number, data: CarDto): Promise<void> {
    return this.updateCarUseCase.execute(id, data);
  }
}
