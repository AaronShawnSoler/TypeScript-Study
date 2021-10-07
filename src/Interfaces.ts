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

// 