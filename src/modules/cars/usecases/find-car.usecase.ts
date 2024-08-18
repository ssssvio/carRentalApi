import { Injectable, NotFoundException } from '@nestjs/common';
import { IFindAllCarsUsecase, IFindCarUsecase } from '../interfaces/find-car.interface';
import { Cars } from '../entities/cars.entity';
import { CarRepository } from '../cars.repository';

@Injectable()
export class GetCarUseCase implements IFindAllCarsUsecase, IFindCarUsecase {
  constructor(private readonly carRepository: CarRepository) { }

  async execute(): Promise<Cars[]> {
    const allCars = await this.carRepository.findAll();
    if (!allCars.length) {
      throw new NotFoundException('No cars found!');
    }
    return allCars;
  }

  async executeById(id: number): Promise<Cars> {
    if (!id) {
      throw new NotFoundException('Please provide a valid ID!');
    }
    const car = await this.carRepository.findOne(id);
    if (!car) {
      throw new NotFoundException(`Car #${id} not found!`);
    }
    return car;
  }
};