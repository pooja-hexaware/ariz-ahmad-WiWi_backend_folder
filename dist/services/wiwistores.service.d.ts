import { wiwistoresRepo } from '../repository/wiwistores.repo';
import { wiwistores } from '../schemas/wiwistores.schema';
export declare class wiwistoresService {
    private readonly wiwistoresRepo;
    constructor(wiwistoresRepo: wiwistoresRepo);
    findAll(): Promise<wiwistores[]>;
    create(data: any): Promise<wiwistores>;
    update(wiwistoresId: any, data: any): Promise<wiwistores>;
    delete(wiwistoresId: any): Promise<wiwistores>;
}
