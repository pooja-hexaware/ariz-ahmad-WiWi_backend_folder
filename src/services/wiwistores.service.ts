import { Injectable } from '@nestjs/common';
import { wiwistoresRepo } from '../repository/wiwistores.repo';
import { wiwistores } from '../schemas/wiwistores.schema';

@Injectable()
export class wiwistoresService {
    constructor(
        private readonly wiwistoresRepo: wiwistoresRepo
    ) { }

    async findAll(): Promise<wiwistores[]> {
        return this.wiwistoresRepo.findAll();
    }

    async create(data): Promise<wiwistores> {
        data.createddate = new Date();
        return this.wiwistoresRepo.create(data);
    }

    async update(wiwistoresId, data): Promise<wiwistores> {
        return this.wiwistoresRepo.update(wiwistoresId, data);
    }

    async delete(wiwistoresId): Promise<wiwistores> {
        return this.wiwistoresRepo.delete(wiwistoresId);
    }
}