import { Model } from 'mongoose';
import { wiwistores, wiwistoresDocument } from 'src/schemas/wiwistores.schema';
export declare class wiwistoresRepo {
    private readonly wiwistoresModel;
    constructor(wiwistoresModel: Model<wiwistoresDocument>);
    create(data: any): Promise<wiwistores>;
    findAll(): Promise<wiwistores[]>;
    update(wiwistoresId: any, data: any): Promise<wiwistores>;
    delete(wiwistoresId: any): Promise<wiwistores>;
}
