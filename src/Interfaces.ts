// INTERFACE

interface Human {
  name: string
  age: number

  greet(phrase: string): void
}

let user1: Human

user1 = {
  name: 'Aaron',
  age: 22,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`)
  }
}

class Homosapien implements Human {
  name: string
  age: number

  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`)
  }
}

// READ ONLY INTERFACE PROPERTIES

interface Place {
  readonly address: string
}

class Home implements Place {
  constructor(public address: string) {

  }
}

const HomeSweetHome = new Home('1234 City Ave')

// EXTENDING INTERFACES

interface Named {
  readonly name: string
}

interface Aged {
  age: number
}

interface Hello extends Named, Aged {
  hello(message: string): void
}

class Greeting implements Hello {
  constructor(public name: string, public age: number) {

  }

  hello(message: string): void {
    console.log(message)
  }
}

// INTERFACES AS FUNCTION TYPES

interface addFn {
  (numA: number, numB: number): number
}

let addFunction: addFn

addFunction = (numA: number, numB: number): number {
  return numA + numB
}