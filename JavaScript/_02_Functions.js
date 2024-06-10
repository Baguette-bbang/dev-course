// 일급객체는 함수의 실제 매개변수가 될 수 있다.
function greet(name) {
    return `Hello, ${name}!`;
}

function processUserInput(callback) {
    const name = 'Alice';
    console.log(callback(name));
}

// 함수 `greet`를 `processUserInput`의 인자로 전달
processUserInput(greet); // "Hello, Alice!"


// 일급객체는 함수의 반환값이 될 수 있다.
function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeting('Hello');
const sayHi = createGreeting('Hi');

console.log(sayHello('Alice')); // "Hello, Alice!"
console.log(sayHi('Bob')); // "Hi, Bob!"

// 일급객체는 할당명령문의 대상이 될 수 있다. (변수 등에 할당 가능)
const add = function(a, b) {
    return a + b;
};

const operations = {
    sum: add,
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(add(2, 3)); // 5
console.log(operations.sum(4, 5)); // 9
console.log(operations.subtract(9, 5)); // 4

// 일급객체는 동일비교의 대상이 될 수 있다. (값으로 표현 가능)
const func1 = function() {};
const func2 = function() {};
const func3 = func1;

console.log(func1 === func2); // false (서로 다른 함수)
console.log(func1 === func3); // true (같은 함수 참조)

// 기본값 매개변수 default function parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet()); // "Hello, Guest!"

// 나머지 매개변수 Rest parameter
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// arguments 객체
function multiply() {
    let product = 1;
    for (let i = 0; i < arguments.length; i++) {
        product *= arguments[i];
    }
    return product;
}
console.log(multiply(1, 2, 3)); // 6

// IIFE( 즉시실행 ) 
(function() {
    console.log("This is an IIFE");
})();

(function(name) {
    console.log(`Hello, ${name}`);
})("Alice");

// 재귀 함수
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// 중첩함수
function outerFunction(outerVariable) {
    function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    }
    innerFunction(10);
}

outerFunction("Outside");

// 콜백함수
function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data from server";
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log(`Processing: ${data}`);
}

fetchData(processData);