"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponDto = void 0;
const openapi = require("@nestjs/swagger");
class couponDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { cname: { required: true, type: () => String }, cdis: { required: true, type: () => Number } };
    }
}
exports.couponDto = couponDto;
//# sourceMappingURL=coupon-dto.dto.js.map