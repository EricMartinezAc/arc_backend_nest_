import { Type } from "class-transformer";
import { IsBoolean,  IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    public name: string;
    @IsNotEmpty()
    @IsString()
    public psw: string;
    @IsNotEmpty()
    @IsString()
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
    public credits: number
}
