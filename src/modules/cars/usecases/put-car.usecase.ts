import { Injectable, NotFoundException } from '@nestjs/common';
import { IUsecase } from 'src/common/interfaces/usecase.interface';
import { CarRepository } from '../../../data/cars/repositories/car.repository';
import { CarDto } from '../dto';

@Injectable()
export class PutCarUseCase implements IUsecase {
  constructor(private readonly carsRepository: CarRepository) {}

  async execute(id: number, body: CarDto): Promise<any> {
    const car = await this.carsRepository.findOne(id);
    if (!car) {
      throw new NotFoundException(`Car #${id} not found!`);
    }
    // O que ???
    if (JSON.stringify(car) === JSON.stringify(body)) {
      return;
    }
    // ???
    const carToUpdate = { ...car, ...body };
    await this.carsRepository.save(carToUpdate);
    return { message: 'Some message' }; //crie um response na pasta common
  }
}
