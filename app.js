"use strict";
//OOP
//Creating first class
class Department {
    constructor(n) {
        this.name = 'DEFAULT';
        this.name = n;
    }
    describe() {
        console.log(this.name);
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
const accountingCopy = {
    name: 'DUMMY',
    describe: accounting.describe,
};
accountingCopy.describe();
