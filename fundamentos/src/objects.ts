type Depends = {
    dependId: number
    dependName: string
    dependAge: number
    dependEmail: string
}

type User = {
    firstName: string
    age: number
    password?: string
    email: string
    depends?: Depends[]
    register?(): string;
}

const user1: User = {
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
        return `User ${this.firstName} registered successfully!`
    },
}

const printPassword = (message: string) => {
    console.log(message)
}

printPassword(user1.password!)


type Author = {
    books: string[]
}

const author : Author & User = {
    firstName: "Pontes",
    age: 26,
    password: "4664602754698",
    email: "gabriel.pontes@renova.br.net",
    books: ["Livro 1", "Livro 2"]
}

interface UserInterface {
    readonly firstName: string
    age: number
}

const emailUser: UserInterface = {
    firstName: "Sena",
    age: 25
}

