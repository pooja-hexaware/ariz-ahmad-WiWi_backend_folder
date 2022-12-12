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
exports.wiwistoresService = void 0;
const common_1 = require("@nestjs/common");
const wiwistores_repo_1 = require("../repository/wiwistores.repo");
let wiwistoresService = class wiwistoresService {
    constructor(wiwistoresRepo) {
        this.wiwistoresRepo = wiwistoresRepo;
    }
    async findAll() {
        return this.wiwistoresRepo.findAll();
    }
    async create(data) {
        data.createddate = new Date();
        return this.wiwistoresRepo.create(data);
    }
    async update(wiwistoresId, data) {
        return this.wiwistoresRepo.update(wiwistoresId, data);
    }
    async delete(wiwistoresId) {
        return this.wiwistoresRepo.delete(wiwistoresId);
    }
};
wiwistoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [wiwistores_repo_1.wiwistoresRepo])
], wiwistoresService);
exports.wiwistoresService = wiwistoresService;
//# sourceMappingURL=wiwistores.service.js.map