"use strict";
// CORE TYPES
var firstName = 'Aaron';
var age = 22;
var legal = true;
// OBJECT TYPES
var person = {
    name: 'Aaron',
    age: 22
};
// NESTED OBJECT EXAMPLE
var player = {
    username: 'gamer',
    points: 9000,
    inventory: {
        ammo: 64
    }
};
// ARRAY TYPES
var names = ['Aaron', 'Aniyah', 'Ariana'];
var ages = [22, 13, 6];
var isLegal = [true, false, false];
var anyTypes = ['string', 123, false];
var stringNumber = ['hello', 21, 'world', 45];
// TUPLE TYPES
var role = [0, 'owner'];
// ENUM
var Role;
(function (Role) {
    Role[Role["SUPERADMIN"] = 0] = "SUPERADMIN";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["MODERATOR"] = 2] = "MODERATOR";
})(Role || (Role = {}));
var Perms;
(function (Perms) {
    Perms[Perms["ADMIN"] = 10] = "ADMIN";
    Perms["MODERATOR"] = "MOD";
    Perms["USER"] = "Member";
})(Perms || (Perms = {}));
// UNION TYPES
var both;
both = 'union';
both = 123;
both = false;
// LITERAL TYPES
var PI = 3.14;
var someText;
// FUNCTION RETURN TYPES
function add(n1, n2) {
    return n1 + n2;
}
function log(num) {
    console.log(num);
}
function undef(text) {
    console.log(text);
    return;
}
// FUNCTION TYPES
var addition;
addition = add;
addition(10, 20);
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
    return result;
}
addAndHandle(10, 20, log);
// UNKNOWN TYPE
var userInput;
var userName;
userInput = 5;
userName = 'Aaron';
if (typeof userInput === 'string') {
    userName = userInput;
}
// NEVER TYPE
function generateError(text, code) {
    throw { messgae: text, errorCode: code };
}
generateError('An error occured', 500);
// DEFAULT FUNCTION PARAMETERS
function subtract(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
subtract(5);
