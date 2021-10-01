"use strict";
// CLASSES
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    return Department;
}());
var department = new Department('IT');
// PRIVATE & PUBLIC ACCESS MODIFIERS
var Person = /** @class */ (function () {
    function Person(n, a) {
        this.name = n;
        this.age = a;
    }
    Person.prototype.changeName = function (newName) {
        this.name = newName;
    };
    return Person;
}());
var Aaron = new Person('Aaron', 22);
Aaron.age = 23;
Aaron.changeName('Soler');
// SHORTHAND INITIALIZATION
var Car = /** @class */ (function () {
    function Car(miles, vin) {
        this.miles = miles;
        this.vin = vin;
        // CODE
    }
    return Car;
}());
var BMW = new Car(1000, 'ABCD1234');
console.log(BMW.miles);
// READ ONLY PROPERTIES
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    return Employee;
}());
