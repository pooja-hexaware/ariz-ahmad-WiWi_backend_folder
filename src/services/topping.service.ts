import { Injectable } from '@nestjs/common';
import { toppingRepo } from '../repository/topping.repo';
import { topping } from '../schemas/topping.schema';

@Injectable()
export class toppingService {
    constructor(
        private readonly toppingRepo: toppingRepo
    ) { }

    async findAll(): Promise<topping[]> {
        return this.toppingRepo.findAll();
    }

    async create(data): Promise<topping> {
        data.createddate = new Date();
        return this.toppingRepo.create(data);
    }

    async update(toppingId, data): Promise<topping> {
        return this.toppingRepo.update(toppingId, data);
    }

    async delete(toppingId): Promise<topping> {
        return this.toppingRepo.delete(toppingId);
    }
}