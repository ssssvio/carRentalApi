import { Injectable } from '@nestjs/common';
import { CarDTO } from '../dto/car-dto';
import { Cars } from '../entities/cars.entity';
import { ICreateCarUsecase } from '../interfaces/create-car.interface';
import { CarRepository } from '../cars.repository';

@Injectable()
export class PostCarUseCase implements ICreateCarUsecase {
  constructor(private readonly carRepository: CarRepository) { }

  async execute(data: CarDTO): Promise<Cars> {
    const car = this.carRepository.create(data);
    this.carRepository.save(car);
    return car
  }
};