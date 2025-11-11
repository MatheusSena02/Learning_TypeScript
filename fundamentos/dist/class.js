"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return `My name is ${this.name}`;
    }
}
exports.Person = Person;
const person1 = new Person(1, "Matheus", 22);
console.log(person1.sayMyName());
//# sourceMappingURL=class.js.map