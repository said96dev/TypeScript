//OOP
//Creating first class

class Department {
  private employees: string[] = []
  public name: string = 'DEFAULT' //public is the defualt property
  constructor(n: string) {
    this.name = n
  }

  describe(this: Department) {
    console.log(this.name)
  }
  addEmploy(employee: string) {
    this.employees.push(employee)
  }
  printEmployessInformations() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('Accounting')

accounting.addEmploy('MAX')
accounting.addEmploy('SAID')
//accounting.employees[2] = 'ALAA' if not private, will works
accounting.describe()
accounting.printEmployessInformations()

/* const accountingCopy = {
  name: 'DUMMY',
  describe: accounting.describe,
}
accountingCopy.describe() */
