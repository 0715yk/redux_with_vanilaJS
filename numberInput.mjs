import { inputDecreaseCount, inputIncreaseCount } from "./actionCreator.mjs";
import { store } from "./reducer.mjs";

const divElement = document.createElement("div");
const inputElement = document.createElement("input");
const btnElement = document.createElement("button");
const decreaseBtnElement = document.createElement("button");
inputElement.id = "numberInput";
inputElement.type = "number";
inputElement.min = 0;
btnElement.id = "increaseBtn";
decreaseBtnElement.id = "decreaseBtn";
btnElement.textContent = "+";
decreaseBtnElement.textContent = "-";
const fragment = document.createDocumentFragment();
fragment.appendChild(inputElement);
fragment.appendChild(btnElement);
fragment.appendChild(decreaseBtnElement);
divElement.appendChild(fragment);
document.body.appendChild(divElement);

inputElement.addEventListener("change", function (e) {
  if (e.target.value < 0) {
    inputElement.value = "";
  }
});

btnElement.addEventListener("click", function () {
  const inputValue = inputElement.value;
  if (inputValue) {
    store.dispatch(inputIncreaseCount(parseInt(inputValue)));
    inputElement.value = "";
  }
});

decreaseBtnElement.addEventListener("click", function () {
  const inputValue = inputElement.value;
  if (inputValue) {
    store.dispatch(inputDecreaseCount(parseInt(inputValue)));
    inputElement.value = "";
  }
});
