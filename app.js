"use strict";
//OOP
//Creating first class
class Department {
    constructor(n) {
        this.employees = [];
        this.name = 'DEFAULT'; //public is the defualt property
        this.name = n;
    }
    describe() {
        console.log(this.name);
    }
    addEmploy(employee) {
        this.employees.push(employee);
    }
    printEmployessInformations() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.addEmploy('MAX');
accounting.addEmploy('SAID');
//accounting.employees[2] = 'ALAA' if not private, will works
accounting.describe();
accounting.printEmployessInformations();
/* const accountingCopy = {
  name: 'DUMMY',
  describe: accounting.describe,
}
accountingCopy.describe() */
