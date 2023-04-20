const $form = document.querySelector("#ingredient-form");
const $table = document.querySelector("table");
const $submitBtn = document.querySelector("#submit_button");

// 레시피를 저장할 객체
let recipe = {};

// 재료추가 이벤트
$form.addEventListener("submit", (e) => {
  e.preventDefault();

  // input 선택
  const $ingredientInput = $form.querySelector('input[name="ingredient"]');
  const $weightInput = $form.querySelector('input[name="weight"]');

  // input 안에 공백제거
  const $ingredient = $ingredientInput.value.trim();
  const $weight = $weightInput.value.trim();

  // 재료와 무게를 아무것도 입력하지 않았을 경우
  if ($ingredient === "" || $weight === "") {
    alert("재료와 무게를 정확이 입력해주세요.");
    return;
  }

  // 같은 재료를 등록했을 경우
  if (recipe[$ingredient]) {
    alert("이미 등록된 재료 입니다.");
    return;
  }

  // recipe의 재료와 무게를 저장
  recipe[$ingredient] = $weight;

  // 표의 행을 추가하는 변수 생성 (insertRow() = 행추가 함수)
  const $row = $table.insertRow();

  // 행이 추가되었을 때 text로 재료 input에서 입력한 값을 대입
  $row.insertCell().textContent = $ingredient;
  // 행이 추가되었을 때 text로 무게 input에서 입력한 값을 대입
  $row.insertCell().textContent = $weight;

  // 삭제버튼 생성
  const $removeBtn = document.createElement("button");
  // 버튼 안에 이름을 부여
  $removeBtn.textContent = "삭제";

  // 삭제버튼 클릭 이벤트
  $removeBtn.addEventListener("click", () => {
    // 버튼 클릭시 재료와 무게, 추가된 행이 삭제됨
    delete recipe[$ingredient];
    $row.remove();
  });
  // 재료가 추가되었을 때 삭제버튼이 생기게끔 추가
  $row.insertCell().appendChild($removeBtn);

  // input의 값을 빈 문자열로 받음
  $ingredientInput.value = "";
  $weightInput.value = "";
});

// 제출 버튼 클릭 이벤트
$submitBtn.addEventListener("click", () => {
  const $ingredientList = document.querySelector("#ingredient-list");
  // ul 태그가 화면에 보이도록 설정
  $ingredientList.innerHTML = "";

  // for...in 문을 사용해 ingredient 라는 변수 안에 recipe를 넣는다.
  for (const ingredient in recipe) {
    // ul 태그의 자식으로 들어갈 li 태그를 만들어준다.
    const $listItem = document.createElement("li");
    // li 태그 text로 재료와 무게를 넣어줌
    $listItem.textContent = `${ingredient}: ${recipe[ingredient]}`;
    // ul 태그의 자식으로 li 태그를 넣어줌
    $ingredientList.appendChild($listItem);
  }

  // recipe 객체 초기화
  recipe = {};
  // table의 thead 클래스를 갖지 않은 tr 태그를 모두 선택해주고 forEach를 돌려 해당 행을 삭제해준다.
  // 즉 제출버튼 클릭시 표에 기입된 재료와 무게를 지운다는 뜻
  $table.querySelectorAll("tr:not(.thead)").forEach((row) => row.remove());
});
