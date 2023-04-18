const user = {
  name: "김성용",
  age: 20,
  height: 190,
};

// 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것

/* 
(1) user[”key”], user.key
(2) Object.keys()
(3) Object.values()
(4) Object.entries()
(5) for in
*/
// 1
/*
user[”key”], user.key 메소드는 객체의 속성을 접근하는 방법 중 하나
user["name"] 은 김성용을, user.age는 20을 반환한다.
*/
console.log("1번 방식: ", user["name"], user.age, user["height"]);

// 2
/*
Object.keys() 메서드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 *배열*로 반환합니다.
Object.keys(user)로만 출력하면 객체의 key 값([name, age, height])만 나오기 때문에 for문을 사용해 value 값을 출력한다.
*/
const keys = Object.keys(user);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log("2번 방식: ", user[key]);
}

// console.log(Object.keys(user));

// 3
/*
Object.values() 메서드는 주어진 개체 자체의 열거 가능한 문자열 키 속성 값의 *배열*을 반환합니다.
Object.keys()와 마찬가지로 배열을 반환합니다. key와는 다르게 user의 value값을 보여주기 때문에 바로 콘솔에 찍어 출력했습니다.
*/

console.log("3번 방식: ", Object.values(user));

// 4
/*
Object.entries() 메소드는 객체의 속성 이름과 값들을 [key, value] 형태의 배열로 반환합니다.
*/
// const entries = Object.entries(user);
// for (let i = 0; i < entries.length; i++) {
//   const [key, value] = entries[i];
//   console.log(`4번 방식: ${key}: ${value}`);
// }
console.log("4번 방식: ", Object.entries(user));

//5
/*
for ...in 반복문은 객체의 속성 이름을 반복하여 순회합니다.
*/
for (let key in user) {
  console.log("5번 방식: ", user[key]);
}

// 문제2. 값이 “김성용”인 속성의 key 찾기
const key = Object.keys(user).find((key) => user[key] === "김성용");
console.log("문제2번: ", key);

// 문제3. 깊은 복사를 통해 user 객체의 복사본을 만든 후 name을 본인의 이름으로 수정
function copyUser(user) {
  const result = {};

  for (let key in user) {
    if (typeof user[key] === "object") {
      result[key] = copyUser(user[key]);
    } else {
      result[key] = user[key];
    }
  }

  return result;
}

const copiedUser = copyUser(user);
copiedUser.name = "윤국현";

console.log(copiedUser);
/*
lodash 라이브러리 사용해서 깊은 복사하기 
const copiedUser = _.cloneDeep(user);
copiedUser.name = "윤국현";
*/
