import { toppingDto } from '../dto/topping-dto.dto';
import { toppingService } from '../services/topping.service';
export declare class toppingController {
    private readonly toppingService;
    constructor(toppingService: toppingService);
    create(toppingDto: toppingDto): Promise<import("../schemas/topping.schema").topping>;
    findAll(): Promise<import("../schemas/topping.schema").topping[]>;
    update(id: string, toppingDto: toppingDto): Promise<import("../schemas/topping.schema").topping>;
    delete(id: string): Promise<import("../schemas/topping.schema").topping>;
}
