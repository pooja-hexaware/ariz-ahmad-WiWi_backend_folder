import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { coupon, couponDocument } from 'src/schemas/coupon.schema';

@Injectable()
export class couponRepo {
    constructor(
        @InjectModel(coupon.name)
        private readonly couponModel: Model<couponDocument>) {}

    async create(data): Promise<coupon> {
        return new this.couponModel(data).save();
    }

    async findAll(): Promise<coupon[]> {
        return this.couponModel.find({})
            .exec();
    }

    async update(couponId, data): Promise<coupon> {
        const filter = { _id: couponId };
        return this.couponModel.findOneAndUpdate(filter, data);
    }

    async delete(couponId): Promise<coupon> {
        const filter = { _id: couponId };
        return this.couponModel.findByIdAndDelete(couponId);
    }
}