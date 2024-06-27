"use strict";
let stdId = 20;
let stdName = 'kang';
let gender = 'male';
let course = 'TypeScript';
let completed = false;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
class MyStudent {
    constructor() {
        this.stdId = 2;
        this.stdName = 'kim';
        this.gender = GenderType.Female;
        this.course = 'node.js';
        this.completed = true;
        this.age = 23;
    }
    setName(name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    }
    ;
}
const myInstance = new MyStudent();
myInstance.setName('강영민');
console.log(myInstance);
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'kang',
        gender: GenderType.Male,
        course: 'typeScript',
        completed: true,
        setName: (name) => {
            console.log(`Name set to ${name}`);
        }
    };
}
console.log(getInfo(1));
let nodeStd = {
    stdId: 2,
    stdName: 'Kim',
    gender: GenderType.Female,
    course: 'node.js',
    completed: true,
    setName: (name) => {
        console.log(`Name set to ${name}`);
    }
};
function setInfo(student) {
    console.log(student);
}
setInfo(nodeStd);
// 리터럴
const user = {
    name: 'john',
    age: 25
};
// any 타입
let anyVal = 100;
anyVal = true;
let numStrVal = 100;
numStrVal = '100';
let item;
function convertToString(val) {
    if (typeof val === 'string') {
        item = 0;
    }
    else {
        item = val;
    }
    return String(item);
}
function convertToNumber(val) {
    return Number(val);
}
console.log(convertToString(numStrVal));
console.log(convertToNumber(numStrVal));
let numbers = [1, 2, 3, 4, 5];
let numbers1 = new Array(1, 2, 3, 4, 5);
let numbers2 = new Array([1, 2, 3, 4, 5]);
console.log(numbers);
console.log(numbers1);
console.log(numbers2);
let fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// let mixedArr : string[]|number[] = ['apple', 1]
let mixedArr1 = ['apple', 1];
let greeting = [1, 'hello', true];
greeting[0] = 2;
for (let index = 0; index < greeting.length; index++) {
    const element = greeting[index];
    console.log(element);
}
