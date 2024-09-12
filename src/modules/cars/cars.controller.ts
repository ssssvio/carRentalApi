import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth.guard';
import { TrimPipe } from 'src/common/pipes/trim-pipes';
import { ICarsService } from './cars.service.interface';
import { GetCarDto } from './dto';
import { CarDto } from './dto/post-car-dto';

@ApiBearerAuth()
@ApiTags('cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly service: ICarsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Retrieve all cars' })
  @ApiResponse({
    status: 200,
    description: 'List of cars',
    type: CarDto,
    isArray: true,
  })
  findCars(@Query() query: GetCarDto) {
    return this.service.findCars(query);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Retrieve a car by ID',
    description: 'TODO',
  })
  @ApiResponse({
    status: 200,
    description: 'Car details',
    type: CarDto,
  })
  @ApiParam({ name: 'id', description: 'Car ID', type: Number })
  findCarById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findCarById(id);
  }

  @Post()
  @UsePipes(TrimPipe) // ???
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Create a new car',
    description: 'TODO',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Car successfully created',
    type: CarDto,
  })
  @ApiBody({ type: CarDto })
  create(@Body() car: CarDto) {
    this.service.createCar(car);
    return car;
  }

  @Put(':id')
  @UsePipes(TrimPipe)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update an existing car' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Car successfully updated',
  })
  @ApiParam({ name: 'id', description: 'Car ID', type: Number })
  @ApiBody({ type: CarDto })
  putCar(@Param('id') id: number, @Body() car: CarDto) {
    return this.service.updateCar(id, car);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Delete a car',
    description: 'TODO',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Car successfully deleted',
  })
  @ApiParam({ name: 'id', description: 'Car ID', type: Number })
  removeCar(@Param('id') id: number) {
    return this.service.removeCar(id);
  }
}
