"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    firstName: "Matheus",
    age: 22,
    password: "4664602754698",
    email: "matheus.sena@renova.com",
    depends: [
        {
            dependId: 8746852,
            dependName: "Pedro",
            dependAge: 54,
            dependEmail: "pedro.aleatorio@gmail.com"
        }
    ],
    register() {
        return `User ${this.firstName} registered successfully!`;
    },
};
const printPassword = (message) => {
    console.log(message);
};
printPassword(user1.password);
const author = {
    firstName: "Pontes",
    age: 26,
    password: "4664602754698",
    email: "gabriel.pontes@renova.br.net",
    books: ["Livro 1", "Livro 2"]
};
const emailUser = {
    firstName: "Sena",
    age: 25
};
//# sourceMappingURL=objects.js.map