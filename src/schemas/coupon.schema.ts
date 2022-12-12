import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type couponDocument = coupon & Document;

@Schema()
export class coupon {
   
   @Prop()
   cname: string; 
   
   @Prop()
   cdis: number; 
   
}

export const couponSchema = SchemaFactory.createForClass(coupon);