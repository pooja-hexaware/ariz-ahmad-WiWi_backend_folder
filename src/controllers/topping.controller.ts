import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { toppingDto } from '../dto/topping-dto.dto';
import { toppingService } from '../services/topping.service';


@Controller('topping')
export class toppingController {
    constructor(private readonly toppingService: toppingService) { }

    @Post()
    async create(@Body() toppingDto: toppingDto) {
        const res = this.toppingService.create(toppingDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.toppingService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() toppingDto: toppingDto) {
        return this.toppingService.update(id, toppingDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.toppingService.delete(id);
    }
}