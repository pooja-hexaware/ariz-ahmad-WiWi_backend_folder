import { Model } from 'mongoose';
import { topping, toppingDocument } from 'src/schemas/topping.schema';
export declare class toppingRepo {
    private readonly toppingModel;
    constructor(toppingModel: Model<toppingDocument>);
    create(data: any): Promise<topping>;
    findAll(): Promise<topping[]>;
    update(toppingId: any, data: any): Promise<topping>;
    delete(toppingId: any): Promise<topping>;
}
