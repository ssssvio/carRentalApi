import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarDto } from '../../../modules/cars/dto/post-car-dto';
import { CarEntity } from '../entities/car.entity';

@Injectable()
export class CarRepository {
  constructor(
    @InjectRepository(CarEntity)
    private readonly carsRepository: Repository<CarEntity>,
  ) {}

  create(carData: CarDto): CarEntity {
    return this.carsRepository.create(carData);
  }

  findOne(id: number): Promise<CarEntity> {
    return this.carsRepository.findOne({ where: { id } });
  }

  findAll(): Promise<CarEntity[]> {
    return this.carsRepository.find();
  }

  async save(car: CarEntity): Promise<void> {
    await this.carsRepository.save(car);
  }

  async remove(car: CarEntity): Promise<void> {
    await this.carsRepository.remove(car);
  }
}
