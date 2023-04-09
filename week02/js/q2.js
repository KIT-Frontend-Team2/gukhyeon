/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이가 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [[1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function division(arr, num) {
  const data = [];
  // i를 arr의 길이보다 작게 반복하고, i는 num 만큼 커진다.
  for (let i = 0; i < arr.length; i += num) {
    // slice를 사용해 i번째 인덱스부터 i+num 이전 인덱스 만큼 배열을 빼와서 미리 선언해둔
    // 빈배열 data에 담는다.
    /* 
      ex) arr.slice(0, 2) => [1,2] 이때 i + num은 i가 num만큼 커지기 때문에 
      arr.slice(0, 0 + 2)로 생각한다. 두번 째 반복문이 시작되면 
      for(let i = 2; i < arr.length; i += num) 즉 i가 2가 되면서 
      arr.slice(2, 2 + 2) 가 되므로 arr.slice(2, 4) = [3, 4]가 된다.
    */
    data.push(arr.slice(i, i + num));
  }
  return data;
}

const a = division(arr, 4);
console.log(a);
