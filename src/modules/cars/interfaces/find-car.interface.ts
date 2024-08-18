import { Cars } from '../entities/cars.entity';

export interface IFindAllCarsUsecase {
  execute(): Promise<Cars[]>;
}

export interface IFindCarUsecase {
  executeById(id: number): Promise<Cars>;
}