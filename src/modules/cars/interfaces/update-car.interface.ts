import { CarDTO } from "../dto/car-dto";

export interface IUpdateCarUsecase {
  execute(id: number, data: CarDTO): Promise<void>;
};