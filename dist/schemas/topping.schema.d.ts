import { Document } from 'mongoose';
export declare type toppingDocument = topping & Document;
export declare class topping {
    tname: string;
    tprice: number;
}
export declare const toppingSchema: import("mongoose").Schema<Document<topping, any, any>, import("mongoose").Model<Document<topping, any, any>, any, any>, undefined, {}>;
