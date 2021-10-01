"use strict";
// CLASSES
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
        // CODE
    }
    return Employee;
}());
// INHERITANCE
var Athlete = /** @class */ (function (_super) {
    __extends(Athlete, _super);
    function Athlete(n, a, medals) {
        var _this = _super.call(this, n, a) // Call supers constructor
         || this;
        _this.medals = medals;
        return _this;
    }
    return Athlete;
}(Person));
// OVERRIDING INHERITED METHODS
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sound = sound;
        // CODE
    }
    Animal.prototype.makeSound = function () {
        console.log(this.sound);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(sound) {
        return _super.call(this, sound) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('Meow');
    };
    return Cat;
}(Animal));
// PROTECTED ACCESS MODIFIER
var Player = /** @class */ (function () {
    function Player(health, username) {
        this.health = health;
        this.username = username;
        // Protected properties are shared between extended classes
    }
    return Player;
}());
var Armor = /** @class */ (function (_super) {
    __extends(Armor, _super);
    function Armor(health, username) {
        return _super.call(this, health, username) || this;
    }
    Armor.prototype.log = function () {
        // Cant access private properites outside class scope
        console.log(this.health);
    };
    return Armor;
}(Player));
// GETTERS & SETTERS
var Classroom = /** @class */ (function () {
    function Classroom(students) {
        this.students = students;
        this.students = ['hello', 'world'];
    }
    Object.defineProperty(Classroom.prototype, "getStudents", {
        get: function () {
            return this.students;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Classroom.prototype, "addStudents", {
        set: function (student) {
            this.students = __spreadArray(__spreadArray([], this.students), [student]);
        },
        enumerable: false,
        configurable: true
    });
    return Classroom;
}());
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School(students) {
        return _super.call(this, students) || this;
    }
    School.prototype.logStudents = function () {
        console.log(this.getStudents);
    };
    return School;
}(Classroom));
var HighSchool = new School([]);
HighSchool.logStudents();
