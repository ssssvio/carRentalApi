import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetCarDto {
  @ApiProperty({ example: 'Corolla' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'Toyota' })
  @IsNotEmpty()
  @IsString()
  readonly brand: string;

  @ApiProperty({ example: 2022 })
  @IsNotEmpty()
  @IsNumber()
  readonly year: number;
}
