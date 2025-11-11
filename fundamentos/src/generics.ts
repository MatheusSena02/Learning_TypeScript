const returnValue = <T>(value: T) => value;

const message = returnValue<string>("Hello, TypeScript Generics!");
const count = returnValue<number>(42);


const returnPromise = async (): Promise<number> =>{
    return 5
}

class GenericNumber <T>{
    zeroValue: T
    sum: (x: T, y: T) => T

    constructor(zeroValue: T, sumFunction: (x: T, y: T) => T){
        this.zeroValue = zeroValue
        this.sum = sumFunction
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
console.log(myGenericNumber.sum(5, 10));