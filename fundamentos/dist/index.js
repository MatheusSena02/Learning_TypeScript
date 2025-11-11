"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("./class");
let nome1 = "Pontes";
let age1 = 25;
let favoriteFood1 = "Maçã";
let nome2 = "Matheus";
let age2 = 22;
let favoriteFood2 = 6;
const idList = [1, 2, 3, 4, 5];
let person = [nome1, age1];
let people = [
    [nome1, age1],
    [nome2, age2]
];
let productId = 57;
productId = "Cinquenta e Sete";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
const productName = "Boné";
let itemId;
itemId = productName;
itemId = productName;
const pessoa = new class_1.Person(1, "Matheus", 22);
console.log(pessoa.sayMyName());
console.log(`Nome: ${pessoa.name}\n Idade: ${pessoa.age}`);
//# sourceMappingURL=index.js.map