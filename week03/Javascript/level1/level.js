/*
전체적인 흐름 
1. account.js의 BANK_LIST, ACCOUNT_FORM import 해준다. 
2. html id 참조 
3. 은행 드롭 박스 BANK_LIST 를 사용해 옵션 추가 
4. 버튼 리스너 생성 
4-1. 입력 및 선택된 숫자, 드롭박스 참조 
4-2. 입력,선택된 정보가 알맞게 참조되었는지 확인
5. 계좌 번호 parsing 
5-1. 선택된 은행에 맞는 AccountForm을 가지고 와 - 말고 0인 부분 *해준다. 
5-2. 입력된 계좌 번호 의 앞 뒤 2자리 slice 해준다. 
6. parsing한 계좌 번호를 output 해준다.
*/

import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

const $bankSelector = document.querySelector("#bank-selector");
const $accountInput = document.querySelector("#account-input");
const $button = document.querySelector("button");
const $accountList = document.querySelector("#account-list");

const $form = document.querySelector("form");
$form.addEventListener("submit", (e) => {
  e.preventDefault();
});

for (const bankId in BANK_LIST) {
  const bankName = BANK_LIST[bankId];
  const $option = document.createElement("option");
  $option.value = bankId;
  $option.textContent = bankName;
  $bankSelector.appendChild($option);
}

$button.addEventListener("click", () => {
  const $accountNum = $accountInput.value;
  const $bankValue = $bankSelector.value;

  if ($accountNum.length !== 12) {
    alert("올바른 계좌번호가 아닙니다.");
    return;
  }

  let parsedAccountNum = ACCOUNT_FORM[$bankValue].slice(2, -2);
  let firstTwoDigits = $accountNum.slice(0, 2);
  let lastTwoDigits = $accountNum.slice(-2);
  let maskedAccountNum = "";

  for (let i = 0; i < parsedAccountNum.length; i++) {
    if (parsedAccountNum[i] === "-") {
      maskedAccountNum += "-";
    } else {
      maskedAccountNum += "*";
    }
  }

  const $li = document.createElement("li");
  $li.innerHTML = `${BANK_LIST[$bankValue]} : \n${firstTwoDigits} ${maskedAccountNum} ${lastTwoDigits}`;
  $accountList.appendChild($li);
});

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);
