import { Injectable, NotFoundException } from '@nestjs/common';
import { IDeleteCarUsecase } from '../interfaces/delete-car.interface';
import { CarRepository } from '../cars.repository';

@Injectable()
export class DeleteCarUseCase implements IDeleteCarUsecase {
  constructor(private readonly carRepository: CarRepository) { }

  async execute(id: number): Promise<void> {
    const carToRemove = await this.carRepository.findOne(id);
    if (!carToRemove) {
      throw new NotFoundException(`Car #${id} not found`);
    }
    await this.carRepository.remove(carToRemove);
    return;
  }
};