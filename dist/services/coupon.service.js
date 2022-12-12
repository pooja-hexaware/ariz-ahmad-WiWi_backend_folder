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
exports.couponService = void 0;
const common_1 = require("@nestjs/common");
const coupon_repo_1 = require("../repository/coupon.repo");
let couponService = class couponService {
    constructor(couponRepo) {
        this.couponRepo = couponRepo;
    }
    async findAll() {
        return this.couponRepo.findAll();
    }
    async create(data) {
        data.createddate = new Date();
        return this.couponRepo.create(data);
    }
    async update(couponId, data) {
        return this.couponRepo.update(couponId, data);
    }
    async delete(couponId) {
        return this.couponRepo.delete(couponId);
    }
};
couponService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [coupon_repo_1.couponRepo])
], couponService);
exports.couponService = couponService;
//# sourceMappingURL=coupon.service.js.map