import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기


*/

const $input = document.querySelectorAll("input");
const $reservationNumber = document.querySelector("#reservation-number");
const $form = document.querySelector("form");
const $button = document.querySelector("button");

// 새로고침 방지
$form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// button 클릭시 일어나는 이벤트이므로 addEventListener 사용
$button.addEventListener("click", () => {
  /* 
  check의 매개변수로 name과 phone을 넣고 
  return 할 값으로 RESERVATION_LIST의 필터를 거쳐 고객의 이름과 번호가 같은지 확인
  */
  const check = (name, phone) => {
    return RESERVATION_LIST.filter(
      (item) => item.name === name && item.phone === phone
    );
  };

  // checkResult에 필터로 거른 check의 값을 가져와 input[0]= name, input[1] = phone 의 값을 입력
  const checkResult = check($input[0].value, $input[1].value);

  // 만약 checkResult의 길이가 0(빈배열)이라면 alert 경고 출력하고 innerHTML을 사용해 "데이터가 일치하지 않습니다"를 화면에 출력,
  // 일치한다면 innerHTML을 사용해 화면에 checkResult의 0번째 인덱스 안에서 키값이 number인 것을 출력
  // 즉 입력받은 고객의 number(예약번호)를 화면에 출력
  if (checkResult.length === 0) {
    alert("일치하지 않습니다.");
    $reservationNumber.innerHTML = "데이터가 일치하지 않습니다.";
  } else {
    $reservationNumber.innerHTML = checkResult[0].number;
  }
});
