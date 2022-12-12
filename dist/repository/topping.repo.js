"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toppingRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const topping_schema_1 = require("../schemas/topping.schema");
let toppingRepo = class toppingRepo {
    constructor(toppingModel) {
        this.toppingModel = toppingModel;
    }
    async create(data) {
        return new this.toppingModel(data).save();
    }
    async findAll() {
        return this.toppingModel.find({})
            .exec();
    }
    async update(toppingId, data) {
        const filter = { _id: toppingId };
        return this.toppingModel.findOneAndUpdate(filter, data);
    }
    async delete(toppingId) {
        const filter = { _id: toppingId };
        return this.toppingModel.findByIdAndDelete(toppingId);
    }
};
toppingRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(topping_schema_1.topping.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], toppingRepo);
exports.toppingRepo = toppingRepo;
//# sourceMappingURL=topping.repo.js.map