import { CarDTO } from "./dto/car-dto";
import { Injectable } from "@nestjs/common";
import { Cars } from "./entities/cars.entity";
import { GetCarUseCase } from "./usecases/find-car.usecase";
import { PostCarUseCase } from "./usecases/create-car.usecase";
import { DeleteCarUseCase } from "./usecases/delete-car.usecase";
import { UpdateCarUseCase } from "./usecases/update-car.usecase";

@Injectable()
export class CarsService {
  constructor(
    private readonly postCarUseCase: PostCarUseCase,
    private readonly getCarUseCase: GetCarUseCase,
    private readonly deleteCarUseCase: DeleteCarUseCase,
    private readonly updateCarUseCase: UpdateCarUseCase,
  ) { }

  createCar(data: CarDTO): Promise<Cars> {
    return this.postCarUseCase.execute(data);
  }

  findAllCars(): Promise<Cars[]> {
    return this.getCarUseCase.execute();
  }

  findOneCar(id: number): Promise<Cars> {
    return this.getCarUseCase.executeById(id);
  }

  deleteCar(id: number): Promise<void> {
    return this.deleteCarUseCase.execute(id);
  }

  updateCar(id: number, data: CarDTO): Promise<void> {
    return this.updateCarUseCase.execute(id, data);
  }
};