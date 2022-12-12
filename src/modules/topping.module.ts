import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { toppingController } from '../controllers/topping.controller';
import { toppingService } from '../services/topping.service';
import { toppingRepo } from '../repository/topping.repo';
import { topping, toppingSchema } from '../schemas/topping.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: topping.name, schema: toppingSchema }])
    ],
    controllers: [toppingController],
    providers: [toppingService, toppingRepo],
    exports: [toppingService, toppingRepo]
  })
  export class toppingModule { }