import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarDTO } from './dto/car-dto';
import { Cars } from './entities/cars.entity';

@Injectable()
export class CarRepository {
  constructor(
    @InjectRepository(Cars)
    private readonly carsRepository: Repository<Cars>,
  ) { }

  create(carData: CarDTO): Cars {
    return this.carsRepository.create(carData);
  }

  findOne(id: number): Promise<Cars> {
    return this.carsRepository.findOne({ where: { id } });
  }

  findAll(): Promise<Cars[]> {
    return this.carsRepository.find();
  }

  async save(car: Cars): Promise<void> {
    await this.carsRepository.save(car);
  }

  async remove(car: Cars): Promise<void> {
    await this.carsRepository.remove(car);
  }
};