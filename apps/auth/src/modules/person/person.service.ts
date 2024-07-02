import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PersonService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('PersonService');

  onModuleInit() {
    this.$connect();
    this.logger.log('Connected to the database');
  }

  create(createPersonDto: CreatePersonDto) {
    return this.person.create({ data: createPersonDto });
  }

  async findAll(paginationDTO_) {
    if (!paginationDTO_.page) {
      paginationDTO_.page = 1;
      paginationDTO_.limit = 1000;
    }
    if (paginationDTO_.limit === 1 && paginationDTO_.page <= 1)
      paginationDTO_.page = 2;
    const { page, limit } = paginationDTO_;
    const totalPersons = await this.person.count();
    const totalPages = Math.ceil(totalPersons / limit);
    return {
      data: await this.person.findMany({
        skip: (page - 1) * limit,
        take: limit,
      }),
      meta: {
        limit,
        totalPersons,
        page,
        totalPages,
      },
    };
  }

  findOne(id: number) {
    const person_ = this.person.findFirst({ where: { id } });
    if (!person_) throw new Error('Person not found');
    return person_;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    this.findOne(id);
    return this.person.update({ where: { id }, data: updatePersonDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.person.delete({ where: { id } });
  }
}
