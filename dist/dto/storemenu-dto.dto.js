"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storemenuDto = void 0;
const openapi = require("@nestjs/swagger");
class storemenuDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { itemname: { required: true, type: () => String }, desc: { required: true, type: () => String }, price: { required: true, type: () => Number }, storeid: { required: true, type: () => [String] }, topping: { required: true, type: () => [String] } };
    }
}
exports.storemenuDto = storemenuDto;
//# sourceMappingURL=storemenu-dto.dto.js.map