import { Type } from "class-transformer";
import { IsNotEmpty, IsString, Min } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    psw: string;
    @IsNotEmpty()
    @Min(0)
    @Type(()=> Number)
    idProduct: number;
    @IsNotEmpty()
    @Min(0)
    @Type(()=> Number)
    idPerson: number;
}
