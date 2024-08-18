import { CarDTO } from '../dto/car-dto';
import { CarRepository } from '../cars.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IUpdateCarUsecase } from '../interfaces/update-car.interface';

@Injectable()
export class UpdateCarUseCase implements IUpdateCarUsecase {
  constructor(private readonly carsRepository: CarRepository) { }

  async execute(id: number, data: CarDTO): Promise<void> {
    const car = await this.carsRepository.findOne(id);
    if (!car) {
      throw new NotFoundException(`Car #${id} not found!`);
    }

    if (JSON.stringify(car) === JSON.stringify(data)) {
      return;
    }

    const carToUpdate = { ...car, ...data };
    await this.carsRepository.save(carToUpdate);
  }
};