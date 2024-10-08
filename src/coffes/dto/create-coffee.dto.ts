import { IsArray, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee.' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The name of a coffee.' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ examples: [] })
  @IsArray()
  readonly flavors: string[];
}
