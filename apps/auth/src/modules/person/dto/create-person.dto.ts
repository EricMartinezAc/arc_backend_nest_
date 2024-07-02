import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  lastname: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @Min(0)
  @Max(15)
  @IsNumber({ maxDecimalPlaces: 0 })
  @Type(() => Number)
  contact: number;
  @IsNotEmpty()
  dateOfBirth: Date;
  @IsNotEmpty()
  Nationality: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  martialStatus: string;
  @IsNotEmpty()
  kWords: string;
  @IsNotEmpty()
  user: any;
}
