import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { topping, toppingDocument } from 'src/schemas/topping.schema';

@Injectable()
export class toppingRepo {
    constructor(
        @InjectModel(topping.name)
        private readonly toppingModel: Model<toppingDocument>) {}

    async create(data): Promise<topping> {
        return new this.toppingModel(data).save();
    }

    async findAll(): Promise<topping[]> {
        return this.toppingModel.find({})
            .exec();
    }

    async update(toppingId, data): Promise<topping> {
        const filter = { _id: toppingId };
        return this.toppingModel.findOneAndUpdate(filter, data);
    }

    async delete(toppingId): Promise<topping> {
        const filter = { _id: toppingId };
        return this.toppingModel.findByIdAndDelete(toppingId);
    }
}