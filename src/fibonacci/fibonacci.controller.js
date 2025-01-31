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
exports.FibonacciController = void 0;
const common_1 = require("@nestjs/common");
const fibonacci_service_1 = require("./fibonacci.service");
let FibonacciController = class FibonacciController {
    constructor(fibonacciService) {
        this.fibonacciService = fibonacciService;
    }
    getFibonacci(n) {
        const num = parseInt(n, 10);
        if (isNaN(num) || num <= 0) {
            return { error: 'Please provide a positive integer for n' };
        }
        return { sequence: this.fibonacciService.getFibonacci(num) };
    }
};
exports.FibonacciController = FibonacciController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('n')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FibonacciController.prototype, "getFibonacci", null);
exports.FibonacciController = FibonacciController = __decorate([
    (0, common_1.Controller)('fibonacci'),
    __metadata("design:paramtypes", [fibonacci_service_1.FibonacciService])
], FibonacciController);
