
import { Type } from "class-transformer";
import { IsBoolean,  IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsOptional, IsString, Max, Min } from "class-validator";

export class ResponseArcontrollerApiNestDto {  
    @IsNotEmpty()
    @Min(0)
    @Type(() => Number)
    public sta: number
    @IsNotEmpty()
    @IsObject()
    @IsNotEmptyObject()
    public res: object
    @IsNotEmpty()
    @IsString()
    public msj: string;
}
