import { Document } from 'mongoose';
export declare type wiwistoresDocument = wiwistores & Document;
export declare class wiwistores {
    storeid: number;
    storename: string;
    storelocation: string;
}
export declare const wiwistoresSchema: import("mongoose").Schema<Document<wiwistores, any, any>, import("mongoose").Model<Document<wiwistores, any, any>, any, any>, undefined, {}>;
