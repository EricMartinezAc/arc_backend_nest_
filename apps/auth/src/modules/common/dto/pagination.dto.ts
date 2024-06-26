import { Type } from "class-transformer";
import {  IsOptional, IsPositive } from "class-validator";

export class PaginationDTO {
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    page: number;

    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit: number;
}