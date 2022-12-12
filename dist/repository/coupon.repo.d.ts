import { Model } from 'mongoose';
import { coupon, couponDocument } from 'src/schemas/coupon.schema';
export declare class couponRepo {
    private readonly couponModel;
    constructor(couponModel: Model<couponDocument>);
    create(data: any): Promise<coupon>;
    findAll(): Promise<coupon[]>;
    update(couponId: any, data: any): Promise<coupon>;
    delete(couponId: any): Promise<coupon>;
}
