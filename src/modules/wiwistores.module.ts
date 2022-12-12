import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { wiwistoresController } from '../controllers/wiwistores.controller';
import { wiwistoresService } from '../services/wiwistores.service';
import { wiwistoresRepo } from '../repository/wiwistores.repo';
import { wiwistores, wiwistoresSchema } from '../schemas/wiwistores.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: wiwistores.name, schema: wiwistoresSchema }])
    ],
    controllers: [wiwistoresController],
    providers: [wiwistoresService, wiwistoresRepo],
    exports: [wiwistoresService, wiwistoresRepo]
  })
  export class wiwistoresModule { }