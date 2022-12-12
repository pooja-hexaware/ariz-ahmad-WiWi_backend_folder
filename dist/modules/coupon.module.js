"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const coupon_controller_1 = require("../controllers/coupon.controller");
const coupon_service_1 = require("../services/coupon.service");
const coupon_repo_1 = require("../repository/coupon.repo");
const coupon_schema_1 = require("../schemas/coupon.schema");
let couponModule = class couponModule {
};
couponModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: coupon_schema_1.coupon.name, schema: coupon_schema_1.couponSchema }])
        ],
        controllers: [coupon_controller_1.couponController],
        providers: [coupon_service_1.couponService, coupon_repo_1.couponRepo],
        exports: [coupon_service_1.couponService, coupon_repo_1.couponRepo]
    })
], couponModule);
exports.couponModule = couponModule;
//# sourceMappingURL=coupon.module.js.map