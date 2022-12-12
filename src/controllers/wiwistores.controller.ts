import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { wiwistoresDto } from '../dto/wiwistores-dto.dto';
import { wiwistoresService } from '../services/wiwistores.service';


@Controller('wiwistores')
export class wiwistoresController {
    constructor(private readonly wiwistoresService: wiwistoresService) { }

    @Post()
    async create(@Body() wiwistoresDto: wiwistoresDto) {
        const res = this.wiwistoresService.create(wiwistoresDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.wiwistoresService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() wiwistoresDto: wiwistoresDto) {
        return this.wiwistoresService.update(id, wiwistoresDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.wiwistoresService.delete(id);
    }
}