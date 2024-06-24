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
