// CLASS

class Department {
  name: string // name property defined with type

  constructor(n: string) {
    this.name = n
  }
}

const department = new Department('IT')

// PRIVATE & PUBLIC ACCESS MODIFIERS

class Person {
  private name: string // Only accessible within this class scope
  public age: number  // Can modify instance properties directly

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
  constructor(public miles: number, private vin: string) { // Shorthand way of defining properties
    // CODE
  }
}

const BMW = new Car(1000, 'ABCD1234')
console.log(BMW.miles)

// READ ONLY PROPERTIES

class Employee {
  constructor(private readonly id: string, public name: string) { // readonly and can't modify
    // CODE
  }
}

// INHERITANCE

class Athlete extends Person {
  constructor(n: string, a: number, public medals: number) {
    super(n, a) // Call supers constructor
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

  makeSound() { // redefine function to always meow instead of sound property
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

// GETTERS & SETTERS

class Classroom {
  constructor(private students: string[]) {
    this.students = ['hello', 'world']
  }

  get classmates() {
    return this.students
  }

  set classmates(students: string[]) {
    this.students = students
  }
}

class School extends Classroom {
  constructor(students: string[]) {
    super(students)
  }

  logStudents() {
    console.log(this.classmates) // Using a getter method from super to get value
  }
}

const HighSchool = new School([])
HighSchool.classmates
HighSchool.classmates = ['Aaron', 'Soler'] // SET type has to be the same as the GET return type

// STATIC METHODS AND PROPERTIES

class Computer {
  static year: number = 2021

  static add(n1: number, n2: number): number {
    return n1 + n2
  }
}

Computer.year
Computer.add(10, 20)

// ABSTRACT CLASSES

abstract class Network {
  abstract user(username: string): void
}

class Interns extends Network {
  user(username: string): void {
    // CODE
  }
}

// SINGLETON & PRIVATE CONSTRUCTORS

class Dept {
  private static instance: Dept

  private constructor(public name: string) {

  }

  static getInstance(name: string) {
    if(this.instance) {
      return this.instance
    }
    this.instance = new Dept(name)
    return this.instance
  }
}

const IT = Dept.getInstance('IT')
IT.name