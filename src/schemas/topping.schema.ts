import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type toppingDocument = topping & Document;

@Schema()
export class topping {
   
   @Prop()
   tname: string; 
   
   @Prop()
   tprice: number; 
   
   
}

export const toppingSchema = SchemaFactory.createForClass(topping);