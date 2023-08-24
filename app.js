"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (target) {
        console.log(logString);
        console.log(target);
    };
}
function WithTemplate(template, hookId) {
    return function (_) {
        console.log('Rendering  template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'John';
        console.log('Creating a Person ...');
    }
};
Person = __decorate([
    Logger('Logging-Person'),
    WithTemplate('<h1> SAID </h1>', 'app')
], Person);
const pers = new Person();
console.log(pers);
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
function Log2(target, propertyName, discriptor) {
    console.log('Property decorator 2');
    console.log(target, propertyName);
    console.log(discriptor);
}
function Log3(target, propertyName, discriptor) {
    console.log('Methode decorator 2');
    console.log(target, propertyName);
    console.log(discriptor);
}
class Product {
    set priceVal(val) {
        if (val > 0) {
            this.price = val;
        }
        else {
            throw new Error('Invalid price - should be positive');
        }
    }
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "priceVal", null);
__decorate([
    Log3
], Product.prototype, "getPriceWithTax", null);
