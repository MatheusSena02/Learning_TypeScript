interface IPerson {
    id: number;
    name: string;
    age: number;
    sayMyName(): string;
}
export declare class Person implements IPerson {
    readonly id: number;
    readonly name: string;
    readonly age: number;
    constructor(id: number, name: string, age: number);
    sayMyName(): string;
}
export {};
//# sourceMappingURL=class.d.ts.map