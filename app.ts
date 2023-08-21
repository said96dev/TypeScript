const names: Array<string> = ['Said', 'Edaa']

names[1].split('')

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is Done')
  }, 2000)
})

promise.then((data) => {
  data.split('')
})

//Generic functions
function merge<A extends object, B extends object>(obj1: A, obj2: B) {
  return Object.assign(obj1, obj2)
}

const mergeObj = merge({ name: 'Max' }, { age: '30' })
const mergeObj2 = merge({ name: 'Max', hobbies: ['Sport'] }, { age: '30' })
console.log(mergeObj.age)
console.log(mergeObj2)

// Another Generic Function

interface Lengthy {
  length: number
}
function countAndPrint<T extends Lengthy>(element: T) {
  let descriptionText = 'Got no Value.'
  if (element.length > 0) descriptionText = 'Got ' + element.length + ' value'
  return [element, descriptionText]
}

console.log(countAndPrint('String'))

function extractAndConver<T extends Object, U extends keyof T>(obj: T, key: U) {
  return obj[key]
}

console.log(extractAndConver({ name: 'MAX' }, 'name'))

//Generic class

class DateStorage<T> {
  private data: T[] = []
  addItem(item: T) {
    this.data.push(item)
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItem() {
    return [...this.data]
  }
}

const textStorage = new DateStorage<string>()

textStorage.addItem('SAID')
textStorage.addItem('MAX')

textStorage.removeItem('SAID')

console.log(textStorage.getItem())
