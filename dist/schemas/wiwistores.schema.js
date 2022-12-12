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
exports.wiwistoresSchema = exports.wiwistores = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let wiwistores = class wiwistores {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], wiwistores.prototype, "storeid", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], wiwistores.prototype, "storename", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], wiwistores.prototype, "storelocation", void 0);
wiwistores = __decorate([
    (0, mongoose_1.Schema)()
], wiwistores);
exports.wiwistores = wiwistores;
exports.wiwistoresSchema = mongoose_1.SchemaFactory.createForClass(wiwistores);
//# sourceMappingURL=wiwistores.schema.js.map