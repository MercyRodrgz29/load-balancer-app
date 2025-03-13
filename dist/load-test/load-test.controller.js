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
exports.LoadTestController = void 0;
const common_1 = require("@nestjs/common");
let LoadTestController = class LoadTestController {
    handleLoadTest() {
        const result = Array.from({ length: 1000 }, (_, i) => i).reduce((a, b) => a + b, 0);
        return `Load test result: ${result}`;
    }
};
exports.LoadTestController = LoadTestController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], LoadTestController.prototype, "handleLoadTest", null);
exports.LoadTestController = LoadTestController = __decorate([
    (0, common_1.Controller)('api/load-test')
], LoadTestController);
//# sourceMappingURL=load-test.controller.js.map