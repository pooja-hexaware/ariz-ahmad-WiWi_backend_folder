import { wiwistoresDto } from '../dto/wiwistores-dto.dto';
import { wiwistoresService } from '../services/wiwistores.service';
export declare class wiwistoresController {
    private readonly wiwistoresService;
    constructor(wiwistoresService: wiwistoresService);
    create(wiwistoresDto: wiwistoresDto): Promise<import("../schemas/wiwistores.schema").wiwistores>;
    findAll(): Promise<import("../schemas/wiwistores.schema").wiwistores[]>;
    update(id: string, wiwistoresDto: wiwistoresDto): Promise<import("../schemas/wiwistores.schema").wiwistores>;
    delete(id: string): Promise<import("../schemas/wiwistores.schema").wiwistores>;
}
