var stdId = 20;
var stdName = 'kang';
var gender = 'male';
var course = 'TypeScript';
var completed = false;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 2;
        this.stdName = 'kim';
        this.gender = GenderType.Female;
        this.course = 'node.js';
        this.completed = true;
        this.age = 23;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    ;
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName('강영민');
console.log(myInstance);
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'kang',
        gender: GenderType.Male,
        course: 'typeScript',
        completed: true,
        setName: function (name) {
            console.log("Name set to ".concat(name));
        }
    };
}
console.log(getInfo(1));
var nodeStd = {
    stdId: 2,
    stdName: 'Kim',
    gender: GenderType.Female,
    course: 'node.js',
    completed: true,
    setName: function (name) {
        console.log("Name set to ".concat(name));
    }
};
function setInfo(student) {
    console.log(student);
}
setInfo(nodeStd);
