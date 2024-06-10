// 호이스팅, 변수 키워드 스코프 테스트
try {
    console.log(a); // undefined
    console.log(b); // ReferenceError
    console.log(c); // ReferenceError

} catch (err) {
    console.error(err);
}
var a = 1;
const b = 2;
let c;