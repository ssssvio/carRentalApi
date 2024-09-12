import { IUsecase } from '@common/interfaces/usecase.interface';
import { Injectable } from '@nestjs/common';
import { CarEntity } from '../../../data/cars/entities/car.entity';
import { CarRepository } from '../../../data/cars/repositories/car.repository';
import { CarDto } from '../dto/post-car-dto';

@Injectable()
export class PostCarUseCase implements IUsecase {
  constructor(private readonly carRepository: CarRepository) {}

  async execute(data: CarDto): Promise<CarEntity> {
    const car = this.carRepository.create(data);
    await this.carRepository.save(car);
    return car;
  }
}
