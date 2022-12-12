import { storemenuRepo } from '../repository/storemenu.repo';
import { storemenu } from '../schemas/storemenu.schema';
export declare class storemenuService {
    private readonly storemenuRepo;
    constructor(storemenuRepo: storemenuRepo);
    findAll(): Promise<storemenu[]>;
    create(data: any): Promise<storemenu>;
    update(storemenuId: any, data: any): Promise<storemenu>;
    delete(storemenuId: any): Promise<storemenu>;
}
