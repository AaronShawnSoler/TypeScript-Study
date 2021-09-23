// CORE TYPES

let firstName: string = 'Aaron'
let age: number = 22
let legal: boolean = true

// OBJECT TYPES

const person: {
  name: string
  age: number
} = {
  name: 'Aaron',
  age: 22
}

// NESTED OBJECT EXAMPLE

const player: {
  username: string
  points: number
  inventory: {
    ammo: number
  }
} = {
  username: 'gamer',
  points: 9000,
  inventory: {
    ammo: 64
  }
}

// ARRAY TYPES

let names: string[] = ['Aaron', 'Aniyah', 'Ariana']
let ages: number[] = [22, 13, 6]
let isLegal: boolean[] = [true, false, false]
let anyTypes: any[] = ['string', 123, false]
let stringNumber: (string | number)[] = ['hello', 21, 'world', 45]

// TUPLES

let role: [number, string] = [0, 'owner']

// ENUM

enum Role { SUPERADMIN, ADMIN, MODERATOR }
enum Perms { ADMIN = 10, MODERATOR = 'MOD', USER = 'Member'}

// UNION TYPES

let both: string | number | boolean = 'union'
both = 123
both = false

// LITERAL TYPES

const PI: 3.14 = 3.14
let someText: 'text-one' | 'text-two'

// CUSTOM TYPES

type CustomType = number | string
type Strings = 'hello' | 'world'
type User = {
  name: string
  age: number
}

// FUNCTION RETURN TYPES

function add(n1: number, n2: number): number {
  return n1 + n2
}

function log(num: number): void {
  console.log(num)
}

function undef(text: string): undefined {
  console.log(text)
  return
}

// FUNCTION TYPES

let addition: (n1: number, n2: number) => number
addition = add
addition(10, 20)

// FUNCTION TYPES & CALLBACKS

type logFunc = (num: number) => void

function addAndHandle(n1: number, n2: number, callback: logFunc): number {
  const result = n1 + n2
  callback(result)
  return result
}

addAndHandle(10, 20, log)

// UNKNOWN TYPE

let userInput: unknown
let userName: string

userInput = 5
userName = 'Aaron'

if (typeof userInput === 'string') {
  userName = userInput
}

// NEVER TYPE

function generateError(text: string, code: number): never {
  throw {messgae: text, errorCode: code}
}

generateError('An error occured', 500)