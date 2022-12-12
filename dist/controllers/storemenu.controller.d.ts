import { storemenuDto } from '../dto/storemenu-dto.dto';
import { storemenuService } from '../services/storemenu.service';
export declare class storemenuController {
    private readonly storemenuService;
    constructor(storemenuService: storemenuService);
    create(storemenuDto: storemenuDto): Promise<import("../schemas/storemenu.schema").storemenu>;
    findAll(): Promise<import("../schemas/storemenu.schema").storemenu[]>;
    update(id: string, storemenuDto: storemenuDto): Promise<import("../schemas/storemenu.schema").storemenu>;
    delete(id: string): Promise<import("../schemas/storemenu.schema").storemenu>;
}
