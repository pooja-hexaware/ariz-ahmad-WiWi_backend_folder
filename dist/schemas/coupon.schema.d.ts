import { Document } from 'mongoose';
export declare type couponDocument = coupon & Document;
export declare class coupon {
    cname: string;
    cdis: number;
}
export declare const couponSchema: import("mongoose").Schema<Document<coupon, any, any>, import("mongoose").Model<Document<coupon, any, any>, any, any>, undefined, {}>;
