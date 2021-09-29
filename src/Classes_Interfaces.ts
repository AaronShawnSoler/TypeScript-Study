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

  }
}