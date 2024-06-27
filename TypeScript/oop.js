// let empName : string;
// let age : number;
// let empJob : string;
// function printEmp(empName : string, age : number, empJob : string) : void{
//     console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
// }
// printEmp('강영민', 25, '예비 개발자')
var Employee = /** @class */ (function () {
    function Employee(_empName, _age, _empJob) {
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
    }
    Object.defineProperty(Employee.prototype, "empName", {
        get: function () {
            return this._empName;
        },
        set: function (value) {
            this._empName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "empJob", {
        get: function () {
            return this._empJob;
        },
        set: function (value) {
            this._empJob = value;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.printEmp = function () {
        console.log("".concat(this._empName, "\uC758 \uB098\uC774\uB294 ").concat(this._age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(this._empJob, "\uC785\uB2C8\uB2E4."));
    };
    return Employee;
}());
var employee1 = new Employee('강영민', 25, '예비 개발자');
employee1.age = 27;
employee1.printEmp();
