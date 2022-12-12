import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { wiwistores, wiwistoresDocument } from 'src/schemas/wiwistores.schema';

@Injectable()
export class wiwistoresRepo {
    constructor(
        @InjectModel(wiwistores.name)
        private readonly wiwistoresModel: Model<wiwistoresDocument>) {}

    async create(data): Promise<wiwistores> {
        return new this.wiwistoresModel(data).save();
    }

    async findAll(): Promise<wiwistores[]> {
        return this.wiwistoresModel.find({})
            .exec();
    }

    async update(wiwistoresId, data): Promise<wiwistores> {
        const filter = { _id: wiwistoresId };
        return this.wiwistoresModel.findOneAndUpdate(filter, data);
    }

    async delete(wiwistoresId): Promise<wiwistores> {
        const filter = { _id: wiwistoresId };
        return this.wiwistoresModel.findByIdAndDelete(wiwistoresId);
    }
}