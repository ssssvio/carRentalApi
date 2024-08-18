import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { CarDTO } from './dto/car-dto';
import { TrimPipe } from 'src/common/pipes/trim-pipes';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth.guard';
import { CarsService } from './cars.service';

@ApiTags('cars')
@Controller('cars')
@ApiBearerAuth()
export class CarsController {
  constructor(private readonly service: CarsService) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Retrieve all cars' })
  @ApiResponse({ status: 200, description: 'List of cars', type: [CarDTO] })
  findAll() {
    return this.service.findAllCars();
  };

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Retrieve a car by ID' })
  @ApiResponse({ status: 200, description: 'Car details', type: CarDTO })
  @ApiParam({ name: 'id', description: 'Car ID', type: Number })
  findOne(@Param('id') id: number) {
    return this.service.findOneCar(id);
  };

  @Post()
  @UsePipes(TrimPipe)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a new car' })
  @ApiResponse({ status: 201, description: 'Car successfully created', type: CarDTO })
  @ApiBody({ type: CarDTO })
  create(@Body() car: CarDTO) {
    this.service.createCar(car);
    return car;
  };

  @Put(':id')
  @UsePipes(TrimPipe)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Update an existing car' })
  @ApiResponse({ status: 204, description: 'Car successfully updated' })
  @ApiParam({ name: 'id', description: 'Car ID', type: Number })
  @ApiBody({ type: CarDTO })
  update(@Param('id') id: number, @Body() car: CarDTO) {
    return this.service.updateCar(id, car);
  };

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a car' })
  @ApiResponse({ status: 204, description: 'Car successfully deleted' })
  @ApiParam({ name: 'id', description: 'Car ID', type: Number })
  remove(@Param('id') id: number) {
    return this.service.deleteCar(id);
  };
};
