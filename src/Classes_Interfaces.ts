// CLASSES

class Department {
  name: string

  constructor(n: string) {
    this.name = n
  }
}

const department = new Department('IT')

// PRIVATE & PUBLIC ACCESS MODIFIERS

class Person {
  private name: string
  public age: number

  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }

  changeName(newName: string) {
    this.name = newName
  }
}

const Aaron = new Person('Aaron', 22)
Aaron.age = 23
Aaron.changeName('Soler')

// SHORTHAND INITIALIZATION

class Car {
  constructor(public miles: number, private vin: string) {
    // CODE
  }
}

const BMW = new Car(1000, 'ABCD1234')
console.log(BMW.miles)

// READ ONLY PROPERTIES

class Employee {
  constructor(private readonly id: string, public name: string) {
    // CODE
  }
}

// INHERITANCE

class Athlete extends Person {
  constructor(n: string, a: number, public medals: number) {
    super(n, a)
  }
}


// OVERRIDING INHERITED METHODS

class Animal {
  constructor(public sound: string) {
    // CODE
  }

  makeSound() {
    console.log(this.sound)
  }
}

class Cat extends Animal {
  constructor(sound: string) {
    super(sound)
  }

  makeSound() {
    console.log('Meow')
  }
}

// PROTECTED ACCESS MODIFIER

class Player {
  constructor(protected health: number, private username: string) {
    // Protected properties are shared between extended classes
  }
}

class Armor extends Player {
  constructor(health: number, username: string) {
    super(health, username)
  }

  log() {
    // Cant access private properites outside class scope
    console.log(this.health)
  }
}
