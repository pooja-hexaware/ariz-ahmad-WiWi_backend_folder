import { Injectable } from '@nestjs/common';
import { couponRepo } from '../repository/coupon.repo';
import { coupon } from '../schemas/coupon.schema';

@Injectable()
export class couponService {
    constructor(
        private readonly couponRepo: couponRepo
    ) { }

    async findAll(): Promise<coupon[]> {
        return this.couponRepo.findAll();
    }

    async create(data): Promise<coupon> {
        data.createddate = new Date();
        return this.couponRepo.create(data);
    }

    async update(couponId, data): Promise<coupon> {
        return this.couponRepo.update(couponId, data);
    }

    async delete(couponId): Promise<coupon> {
        return this.couponRepo.delete(couponId);
    }
}