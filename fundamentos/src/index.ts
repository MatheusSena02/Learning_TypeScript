import { Person } from "./class";

let nome1: string = "Pontes"
let age1: number = 25
let favoriteFood1: any = "Maçã"


let nome2: string = "Matheus"
let age2: number = 22
let favoriteFood2: any = 6

const idList: number[] = [1, 2, 3, 4, 5];

let person: [string, number] = [nome1, age1]

let people: [string, number][] = 
[
    [nome1, age1],
    [nome2, age2]
]

let productId: string | number = 57
productId = "Cinquenta e Sete"

enum Direction {
    Up = 1,
    Down = 2
}

const direction = Direction.Up


const productName: any = "Boné"

let itemId: string 

itemId = productName as string

itemId = <string>productName

const pessoa: Person = new Person(1, "Matheus", 22);
console.log(pessoa.sayMyName());

console.log(`Nome: ${pessoa.name}\n Idade: ${pessoa.age}`);