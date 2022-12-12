import { couponDto } from '../dto/coupon-dto.dto';
import { couponService } from '../services/coupon.service';
export declare class couponController {
    private readonly couponService;
    constructor(couponService: couponService);
    create(couponDto: couponDto): Promise<import("../schemas/coupon.schema").coupon>;
    findAll(): Promise<import("../schemas/coupon.schema").coupon[]>;
    update(id: string, couponDto: couponDto): Promise<import("../schemas/coupon.schema").coupon>;
    delete(id: string): Promise<import("../schemas/coupon.schema").coupon>;
}
