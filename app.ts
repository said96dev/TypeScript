function Logger(logString: string) {
  return function (target: Function) {
    console.log(logString)
    console.log(target)
  }
}

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    console.log('Rendering  template')
    const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template
    }
  }
}

@Logger('Logging-Person')
@WithTemplate('<h1> SAID </h1>', 'app')
class Person {
  name = 'John'
  constructor() {
    console.log('Creating a Person ...')
  }
}

const pers = new Person()

console.log(pers)

function Log(target: any, propertyName: string) {
  console.log('Property decorator!')
  console.log(target, propertyName)
}

function Log2(
  target: any,
  propertyName: string,
  discriptor: PropertyDecorator
) {
  console.log('Property decorator 2')
  console.log(target, propertyName)
  console.log(discriptor)
}

function Log3(
  target: any,
  propertyName: string,
  discriptor: PropertyDescriptor
) {
  console.log('Methode decorator 2')
  console.log(target, propertyName)
  console.log(discriptor)
}

class Product {
  @Log
  title: string
  price: number
  @Log2
  set priceVal(val: number) {
    if (val > 0) {
      this.price = val
    } else {
      throw new Error('Invalid price - should be positive')
    }
  }
  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }
  @Log3
  getPriceWithTax(tax: number) {
    return this.price * (1 + tax)
  }
}
