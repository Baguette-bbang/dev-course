let stdId : number = 20;
let stdName : string = 'kang'
let gender : string = 'male';
let course : string = 'TypeScript';
let completed : boolean = false;

// 열거형 : 사용자 정의 타입
enum GenderType{
    Male, 
    Female
}

// 인터페이슨 : 사용자 정의 타입
interface Student{
    stdId : number;
    stdName? : string;
    age? : number;
    gender? : GenderType;
    course? : string;
    completed? : boolean;
    setName : (name : string) => void;
    // getName : () => string; 
}

class MyStudent implements Student{
    stdId = 2;
    stdName = 'kim';
    gender = GenderType.Female;
    course = 'node.js';
    completed = true;
    age = 23;

    setName(name : string){
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
}

const myInstance = new MyStudent();
myInstance.setName('강영민');
console.log(myInstance);

function getInfo(id: number): Student {
    return {
        stdId: id,
        stdName: 'kang',
        gender: GenderType.Male,
        course: 'typeScript',
        completed: true,
        setName: (name: string) => {
            console.log(`Name set to ${name}`);
        }
    }
}
    
console.log(getInfo(1));

let nodeStd: Student = {
    stdId: 2,
    stdName: 'Kim',
    gender: GenderType.Female,
    course: 'node.js',
    completed: true,
    setName: (name: string) => {
        console.log(`Name set to ${name}`);
    }
}

function setInfo(student: Student): void {
    console.log(student);
}

setInfo(nodeStd);

// 리터럴
const user : {name : string, age : number} = {
    name : 'john',
    age : 25
}

// any 타입
let anyVal : any = 100;
anyVal = true;

// 유니온 타입
type strOrNum =  number | string;
let numStrVal : strOrNum = 100;
numStrVal = '100';
let item : number;

function convertToString(val : strOrNum) : string{
    if (typeof val === 'string'){
        item = 0;
    } else {
        item = val;
    }
    return String(item)
}

function convertToNumber(val : strOrNum) : number{
    return Number(val)
}

console.log(convertToString(numStrVal))
console.log(convertToNumber(numStrVal))

let numbers = [1,2,3,4,5]
let numbers1 = new Array(1,2,3,4,5)
let numbers2 = new Array([1,2,3,4,5])

console.log(numbers)
console.log(numbers1)
console.log(numbers2)

let fruits : string[] = ['apple', 'banana', 'orange'];
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// let mixedArr : string[]|number[] = ['apple', 1]
let mixedArr1 : (string|number)[] = ['apple', 1]

let greeting : [number, string, boolean] = [1, 'hello', true];
greeting[0] = 2

for (let index = 0; index < greeting.length; index++) {
    const element = greeting[index];
    console.log(element)
}