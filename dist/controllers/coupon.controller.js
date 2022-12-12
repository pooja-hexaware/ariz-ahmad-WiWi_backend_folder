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
exports.couponController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const coupon_dto_dto_1 = require("../dto/coupon-dto.dto");
const coupon_service_1 = require("../services/coupon.service");
let couponController = class couponController {
    constructor(couponService) {
        this.couponService = couponService;
    }
    async create(couponDto) {
        const res = this.couponService.create(couponDto);
        return res;
    }
    async findAll() {
        return this.couponService.findAll();
    }
    update(id, couponDto) {
        return this.couponService.update(id, couponDto);
    }
    delete(id) {
        return this.couponService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../schemas/coupon.schema").coupon }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coupon_dto_dto_1.couponDto]),
    __metadata("design:returntype", Promise)
], couponController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/coupon.schema").coupon] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], couponController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/:id'),
    openapi.ApiResponse({ status: 201, type: require("../schemas/coupon.schema").coupon }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, coupon_dto_dto_1.couponDto]),
    __metadata("design:returntype", void 0)
], couponController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: require("../schemas/coupon.schema").coupon }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], couponController.prototype, "delete", null);
couponController = __decorate([
    (0, common_1.Controller)('coupon'),
    __metadata("design:paramtypes", [coupon_service_1.couponService])
], couponController);
exports.couponController = couponController;
//# sourceMappingURL=coupon.controller.js.map