import { IUsecase } from '@common/interfaces/usecase.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CarRepository } from '../../../data/cars/repositories/car.repository';

@Injectable()
export class DeleteCarUseCase implements IUsecase {
  constructor(private readonly carRepository: CarRepository) {}

  async execute(id: number): Promise<any> {
    const carToRemove = await this.carRepository.findOne(id);
    if (!carToRemove) {
      throw new NotFoundException(`Car #${id} not found`);
    }
    await this.carRepository.remove(carToRemove);
    return { message: 'Some message' }; //crie um response na pasta common
  }
}
