"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_transformer_1 = require("class-transformer");
var create_product_dto_1 = require("./apps/auth/src/modules/products/dto/create-product.dto");
var plainObject = {
    name: 'collo',
    psw: 'qwerty123',
    email: 'ciro.fret@gmail.com',
    credits: '10593',
};
var user = (0, class_transformer_1.plainToClass)(create_product_dto_1.CreateProductDto, plainObject);
console.log('Transformed User:', user);
console.log('Type of credits:', user);
