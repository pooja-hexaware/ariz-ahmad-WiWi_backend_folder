import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { couponController } from '../controllers/coupon.controller';
import { couponService } from '../services/coupon.service';
import { couponRepo } from '../repository/coupon.repo';
import { coupon, couponSchema } from '../schemas/coupon.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: coupon.name, schema: couponSchema }])
    ],
    controllers: [couponController],
    providers: [couponService, couponRepo],
    exports: [couponService, couponRepo]
  })
  export class couponModule { }