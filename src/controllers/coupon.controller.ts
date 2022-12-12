import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { couponDto } from '../dto/coupon-dto.dto';
import { couponService } from '../services/coupon.service';


@Controller('coupon')
export class couponController {
    constructor(private readonly couponService: couponService) { }

    @Post()
    async create(@Body() couponDto: couponDto) {
        const res = this.couponService.create(couponDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.couponService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() couponDto: couponDto) {
        return this.couponService.update(id, couponDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.couponService.delete(id);
    }
}