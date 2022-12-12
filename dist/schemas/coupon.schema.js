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
exports.couponSchema = exports.coupon = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let coupon = class coupon {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], coupon.prototype, "cname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], coupon.prototype, "cdis", void 0);
coupon = __decorate([
    (0, mongoose_1.Schema)()
], coupon);
exports.coupon = coupon;
exports.couponSchema = mongoose_1.SchemaFactory.createForClass(coupon);
//# sourceMappingURL=coupon.schema.js.map