"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wiwistoresDto = void 0;
const openapi = require("@nestjs/swagger");
class wiwistoresDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { storeid: { required: true, type: () => Number }, storename: { required: true, type: () => String }, storelocation: { required: true, type: () => String } };
    }
}
exports.wiwistoresDto = wiwistoresDto;
//# sourceMappingURL=wiwistores-dto.dto.js.map