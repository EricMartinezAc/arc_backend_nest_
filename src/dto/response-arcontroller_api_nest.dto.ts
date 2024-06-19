
import { Type } from "class-transformer";
import { IsBoolean,  IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, Max, Min } from "class-validator";

export class ResponseArcontrollerApiNestDto {  
    @IsNotEmpty()
    @Min(0)
    @IsNumber({ maxDecimalPlaces: 2 })
    @Type(() => Number)
    public sta: number
    @IsNotEmpty()
    @IsObject()
    public res: object;
}
