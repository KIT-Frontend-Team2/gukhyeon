/*
과제
로또 번호 뽑기
1 ~ 45까지 랜덤함 숫자 7자리의 배열
[1, 6, 8, 41, 45, 7]
매번 실행마다 다른 로또번호가 나와야합니다.
*/

// 로또 번호를 담을 빈 배열을 만들어준다.
// 로또 번호 갯수(6개) 만큼 반복시킨다.
// Math.random() 함수를 통해 0부터 45미만 (0~44) 까지 랜덤한 숫자를 lotto 배열 안에 1씩 더해서 넣어준다
// 번호 중복을 막기 위해 for문을 사용해 j를 i만큼 반복 시키고
// 만약 lotto의 i번째 숫자와 j번째 숫자가 같다면 pop() 메소드를 사용해 지워준다.
// 이때 지워진 수만큼 다시 반복을 시키기 위해 i-- 을 한다.
// 배열 오름차순 정렬
let lotto = [];

for (let i = 0; i < 6; i++) {
  lotto.push(Math.floor(Math.random() * 45) + 1);
  for (let j = 0; j < i; j++) {
    if (lotto[i] === lotto[j]) {
      lotto.pop();
      i--;
    }
  }
  lotto.sort((a, b) => {
    return a - b;
  });
}

console.log(lotto);
