import { User } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsAlphanumeric,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  public name: string;
  @IsNotEmpty()
  @IsString()
  public psw: string;
  @IsNotEmpty()
  @IsEmail()
  public email: string;
  @IsOptional()
  @IsBoolean()
  public state: boolean;
  @IsOptional()
  @Min(0)
  @Max(5)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Type(() => Number)
  public level: number;
  @IsOptional()
  @Min(0)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Type(() => Number)
  public credits: number;
  @IsOptional()
  public user: any;
}
