import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';

@Controller('developers')
export class DevelopersController {
  constructor(private readonly developersService: DevelopersService) {}

  @Post()
  async create(@Body() createDeveloperDto: CreateDeveloperDto) {
    const developer = await this.developersService.create(createDeveloperDto);
    return developer;
  }

  @Get()
  async findAll() {
    const developers = await this.developersService.findAll();
    return developers;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const developer = await this.developersService.findOne(id);
    return developer;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDeveloperDto: UpdateDeveloperDto,
  ) {
    const developer = await this.developersService.update(
      id,
      updateDeveloperDto,
    );
    return developer;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.developersService.remove(id);
  }
}
