// 가장 큰 값 구하기
/*
함수의 이름은 maxValue 입니다.
인자로는 정수들이 들어있는 배열을 파라미터로 전달받습니다.
배열로 전달받은 숫자 중 가장 큰 숫자와
숫자를 내림차순으로 정렬된 배열을 객체 형태로 반환해야 합니다.

ex) 
  const a = maxValue([1,2,3,4,5])
  console.log(a)

  결과값
    {
      maxValue: 5,
      sortArray = [5,4,3,2,1]
    }
*/

function maxValue(arr) {
  let max = Math.max(...arr);
  let sortArr = arr.sort(function (a, b) {
    return b - a;
  });
  let obj = {
    maxValue: max,
    sortArr: sortArr,
  };
  console.log(obj);
}

console.log(maxValue([6, 2, 3, 4, 5]));
