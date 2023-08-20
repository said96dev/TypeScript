//OOP
//Creating first class

class Department {
  name: string = 'DEFAULT'
  constructor(n: string) {
    this.name = n
  }

  describe(this: Department) {
    console.log(this.name)
  }
}

const accounting = new Department('Accounting')
console.log(accounting)

accounting.describe()

const accountingCopy = {
  name: 'DUMMY',
  describe: accounting.describe,
}
accountingCopy.describe()
