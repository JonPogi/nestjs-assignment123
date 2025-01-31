"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
<<<<<<< HEAD
const factorial_module_1 = require("./factorial/factorial.module");
=======
<<<<<<< HEAD
const prime_number_module_1 = require("./prime-number/prime-number.module");
=======
const fibonacci_module_1 = require("./fibonacci/fibonacci.module");
>>>>>>> d58ebc7954963ee4dc52ec3e230a19731c87bbf1
>>>>>>> 133de10b294581e832eb6a74d18d9d7e56c8ac18
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
<<<<<<< HEAD
        imports: [factorial_module_1.FactorialModule],
=======
<<<<<<< HEAD
        imports: [prime_number_module_1.PrimeNumberModule],
=======
        imports: [fibonacci_module_1.FibonacciModule],
>>>>>>> d58ebc7954963ee4dc52ec3e230a19731c87bbf1
>>>>>>> 133de10b294581e832eb6a74d18d9d7e56c8ac18
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
