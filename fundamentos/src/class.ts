interface IPerson {
    id: number;
    name: string;
    age: number;

    sayMyName(): string;
}

export class Person implements IPerson {
    readonly id: number;
    readonly name: string;
    readonly age: number;

    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string{
        return `My name is ${this.name}`;
    }
}

const person1 = new Person(1, "Matheus", 22);
console.log(person1.sayMyName());

class Employee extends Person {
    constructor(id: number, name: string, age: number){
        super(id, name, age);
    }
}

class PersonRefact {
    constructor(readonly id: number,
                readonly name: string,
                readonly age: number) {}

    sayMyName(): string{
        return `My name is ${this.name}`;
    }
}