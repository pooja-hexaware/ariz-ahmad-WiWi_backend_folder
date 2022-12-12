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
Object.defineProperty(exports, "__esModule", { value: true });
exports.toppingService = void 0;
const common_1 = require("@nestjs/common");
const topping_repo_1 = require("../repository/topping.repo");
let toppingService = class toppingService {
    constructor(toppingRepo) {
        this.toppingRepo = toppingRepo;
    }
    async findAll() {
        return this.toppingRepo.findAll();
    }
    async create(data) {
        data.createddate = new Date();
        return this.toppingRepo.create(data);
    }
    async update(toppingId, data) {
        return this.toppingRepo.update(toppingId, data);
    }
    async delete(toppingId) {
        return this.toppingRepo.delete(toppingId);
    }
};
toppingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [topping_repo_1.toppingRepo])
], toppingService);
exports.toppingService = toppingService;
//# sourceMappingURL=topping.service.js.map