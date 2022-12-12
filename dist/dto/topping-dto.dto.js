"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toppingDto = void 0;
const openapi = require("@nestjs/swagger");
class toppingDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { tname: { required: true, type: () => String }, tprice: { required: true, type: () => Number } };
    }
}
exports.toppingDto = toppingDto;
//# sourceMappingURL=topping-dto.dto.js.map