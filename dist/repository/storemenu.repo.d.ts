import { Model } from 'mongoose';
import { storemenu, storemenuDocument } from 'src/schemas/storemenu.schema';
export declare class storemenuRepo {
    private readonly storemenuModel;
    constructor(storemenuModel: Model<storemenuDocument>);
    create(data: any): Promise<storemenu>;
    findAll(): Promise<storemenu[]>;
    update(storemenuId: any, data: any): Promise<storemenu>;
    delete(storemenuId: any): Promise<storemenu>;
}
