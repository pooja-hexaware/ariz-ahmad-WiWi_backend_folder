import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { wiwistoresModule } from "./modules/wiwistores.module";
import { storemenuModule } from "./modules/storemenu.module";
import { toppingModule } from "./modules/topping.module";
import { couponModule } from "./modules/coupon.module";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGODB_URL, {
    autoCreate: true,
  }),
        wiwistoresModule,
        storemenuModule,
        toppingModule,
        couponModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
