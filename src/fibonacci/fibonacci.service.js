"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FibonacciService = void 0;
const common_1 = require("@nestjs/common");
let FibonacciService = class FibonacciService {
    getFibonacci(n) {
        if (n <= 0)
            return [];
        if (n === 1)
            return [0];
        let sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }
};
exports.FibonacciService = FibonacciService;
exports.FibonacciService = FibonacciService = __decorate([
    (0, common_1.Injectable)()
], FibonacciService);
