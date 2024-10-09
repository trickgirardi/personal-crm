import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DevelopersService {
  constructor(@Inject('PRISMA_CLIENT') private readonly prisma: PrismaClient) {}

  async create(CreateDeveloperDto: any) {
    const developer = await this.prisma.developer.create({
      data: CreateDeveloperDto,
    });
    return developer;
  }

  async findAll() {
    const developer = await this.prisma.developer.findMany();
    return developer;
  }

  async findOne(id: string) {
    const developer = await this.prisma.developer.findUnique({
      where: { id },
    });
    return developer;
  }

  async update(id: string, updateDeveloperDto: any) {
    const developer = await this.prisma.developer.update({
      where: { id },
      data: updateDeveloperDto,
    });
    return developer;
  }

  async remove(id: string) {
    await this.prisma.developer.delete({
      where: { id },
    });
  }
}
