// let empName : string;
// let age : number;
// let empJob : string;

// function printEmp(empName : string, age : number, empJob : string) : void{
    //     console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
    // }

// printEmp('강영민', 25, '예비 개발자')

class Employee{
    constructor(
        private _empName : string, 
        private _age : number, 
        private _empJob : string) {
    }
    public get empName(): string {
        return this._empName;
    }
    public set empName(value: string) {
        this._empName = value;
    }

    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }

    public get empJob(): string {
        return this._empJob;
    }
    public set empJob(value: string) {
        this._empJob = value;
    }

    printEmp() : void {
        console.log(`${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJob}입니다.`);
    }
}

let employee1 = new Employee('강영민',25,'예비 개발자');
employee1.age = 27;
employee1.printEmp();