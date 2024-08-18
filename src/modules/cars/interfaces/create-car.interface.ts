import { CarDTO } from "../dto/car-dto";
import { Cars } from "../entities/cars.entity";

export interface ICreateCarUsecase {
  execute(data: CarDTO): Promise<Cars>;
};