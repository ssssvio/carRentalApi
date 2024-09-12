import { Injectable } from '@nestjs/common';
import { GetCarDto } from './dto';
import { CarDto } from './dto/post-car-dto';
import { CarResponse } from './responses/car.response';

//NestJS nao lida com interfaces pq elas nao sao "RUNTIME" contornamos isso com classe abstratas

@Injectable()
export abstract class ICarsService {
  abstract createCar(data: CarDto): Promise<CarResponse>;

  abstract findCars(query: GetCarDto): Promise<CarResponse[]>;

  abstract findCarById(id: number): Promise<CarResponse>;

  abstract removeCar(id: number): Promise<void>;

  abstract updateCar(id: number, data: CarDto): Promise<void>;
}
