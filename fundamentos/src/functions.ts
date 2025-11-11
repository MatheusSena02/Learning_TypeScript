interface MathFunction {
    (x: number, y: number): number
}

const sum: MathFunction = (x: number, y: number) => 
{
    return x + y
}

console.log(sum(1, 2))

const log = (message: string) => 
{
    console.log(message)
}




