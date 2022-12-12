import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type wiwistoresDocument = wiwistores & Document;

@Schema()
export class wiwistores {
   
   @Prop()
   storeid: number; 
   
   @Prop()
   storename: string; 
   
   @Prop()
   storelocation: string; 
   
}

export const wiwistoresSchema = SchemaFactory.createForClass(wiwistores);