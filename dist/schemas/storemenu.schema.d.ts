import { Document } from 'mongoose';
export declare type storemenuDocument = storemenu & Document;
export declare class storemenu {
    itemname: string;
    desc: string;
    price: number;
    storeid: string[];
    topping: string[];
}
export declare const storemenuSchema: import("mongoose").Schema<Document<storemenu, any, any>, import("mongoose").Model<Document<storemenu, any, any>, any, any>, undefined, {}>;
