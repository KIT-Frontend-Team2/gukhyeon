/* 
레시피 재료 추가하기
*/
const form = document.querySelector("#ingredient-form");
const table = document.querySelector("table");
const submitButton = document.querySelector("#submit_button");

// 레시피 데이터를 저장할 객체
const recipe = {};

// 재료 추가 이벤트 핸들러
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ingredientInput = form.querySelector('input[name="ingredient"]');
  const weightInput = form.querySelector('input[name="weight"]');

  const ingredient = ingredientInput.value.trim();
  const weight = weightInput.value.trim();

  if (ingredient === "" || weight === "") {
    alert("모든 필드를 입력해주세요!");
    return;
  }

  if (recipe[ingredient]) {
    alert("이미 등록된 재료입니다!");
    return;
  }

  recipe[ingredient] = weight;

  const row = table.insertRow();
  row.insertCell().textContent = ingredient;
  row.insertCell().textContent = weight;
  const removeButton = document.createElement("button");
  removeButton.textContent = "삭제";
  removeButton.addEventListener("click", () => {
    delete recipe[ingredient];
    row.remove();
  });
  row.insertCell().appendChild(removeButton);

  ingredientInput.value = "";
  weightInput.value = "";
});

// 제출 버튼 클릭 이벤트 핸들러
submitButton.addEventListener("click", () => {
  const ingredientList = document.querySelector("#ingredient-list");
  ingredientList.innerHTML = "";

  for (const ingredient in recipe) {
    const listItem = document.createElement("li");
    listItem.textContent = `${ingredient}: ${recipe[ingredient]}`;
    ingredientList.appendChild(listItem);
  }

  recipe = {};
  table.querySelectorAll("tr:not(.thead)").forEach((row) => row.remove());
});
