import { Injectable, NotFoundException } from '@nestjs/common';
import { IUsecase } from 'src/common/interfaces/usecase.interface';
import { CarEntity } from '../../../data/cars/entities/car.entity';
import { CarRepository } from '../../../data/cars/repositories/car.repository';
import { GetCarDto } from '../dto';

@Injectable()
export class GetCarUseCase implements IUsecase {
  constructor(private readonly carRepository: CarRepository) {}

  async execute(query: GetCarDto): Promise<CarEntity[]> {
    //TODO filtrar dados da query
    const allCars = await this.carRepository.findAll();
    if (!allCars.length) {
      throw new NotFoundException('No cars found!');
    }
    return allCars;
  }

  //Isso é errado separa em um usecase separado
  async executeById(id: number): Promise<CarEntity> {
    if (!id) {
      throw new NotFoundException('Please provide a valid ID!');
    }
    const car = await this.carRepository.findOne(id);
    if (!car) {
      throw new NotFoundException(`Car #${id} not found!`);
    }
    return car;
  }
}
