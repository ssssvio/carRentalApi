import { ApiProperty } from '@nestjs/swagger';

export class CarResponse {
  @ApiProperty()
   name: string;

  @ApiProperty()
   brand: string;

  @ApiProperty()
   year: number;

  @ApiProperty()
   color: string;

  @ApiProperty()
   price: number;

  @ApiProperty()
   rented: boolean;
};