"use strict";
//OOP
//Creating first class
class Department {
    constructor(n) {
        this.name = 'DEFAULT';
        this.name = n;
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
