"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storemenuModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const storemenu_controller_1 = require("../controllers/storemenu.controller");
const storemenu_service_1 = require("../services/storemenu.service");
const storemenu_repo_1 = require("../repository/storemenu.repo");
const storemenu_schema_1 = require("../schemas/storemenu.schema");
let storemenuModule = class storemenuModule {
};
storemenuModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: storemenu_schema_1.storemenu.name, schema: storemenu_schema_1.storemenuSchema }])
        ],
        controllers: [storemenu_controller_1.storemenuController],
        providers: [storemenu_service_1.storemenuService, storemenu_repo_1.storemenuRepo],
        exports: [storemenu_service_1.storemenuService, storemenu_repo_1.storemenuRepo]
    })
], storemenuModule);
exports.storemenuModule = storemenuModule;
//# sourceMappingURL=storemenu.module.js.map