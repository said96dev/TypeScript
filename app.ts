interface Person {
  name: string
  age: number

  greet(phrase: string): void
}

let user1: Person

user1 = {
  name: 'SAID',
  age: 44,
  greet(phrase: string) {
    console.log(phrase + '' + user1.name)
  },
}
user1.greet('Hey there i am ')
