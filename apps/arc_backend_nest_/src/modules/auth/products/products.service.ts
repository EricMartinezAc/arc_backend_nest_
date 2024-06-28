import {
  Inject,
  Injectable,
  Logger,
  OnModuleInit,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDTO } from '../../common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ProductsService');

  onModuleInit() {
    this.$connect();
    this.logger.log('Connected to the database');
  }
  create(createProductDto: CreateProductDto) {
    return this.product.create({ data: createProductDto });
  }

  async findAll(paginationDTO_) {
    if (!paginationDTO_.page) {
      paginationDTO_.page = 1;
      paginationDTO_.limit = 10000;
    }
    const { page, limit } = paginationDTO_;
    const totalProducts = await this.product.count({ where: { state: true } });
    const totalPages = Math.ceil(totalProducts / limit);
    return {
      data: await this.product.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: { state: true },
      }),
      meta: {
        limit,
        totalProducts,
        page,
        totalPages,
      },
    };
  }

  async findOne(id: number) {
    const product_ = await this.product.findFirst({
      where: { id, state: true },
    });
    if (!product_) {
      throw new Error('Product not found');
    }
    return product_;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.findOne(id);
    return this.product.update({ where: { id }, data: updateProductDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.product.update({
      where: { id },
      data: { state: false },
    });
  }
}
