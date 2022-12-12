import { couponRepo } from '../repository/coupon.repo';
import { coupon } from '../schemas/coupon.schema';
export declare class couponService {
    private readonly couponRepo;
    constructor(couponRepo: couponRepo);
    findAll(): Promise<coupon[]>;
    create(data: any): Promise<coupon>;
    update(couponId: any, data: any): Promise<coupon>;
    delete(couponId: any): Promise<coupon>;
}
