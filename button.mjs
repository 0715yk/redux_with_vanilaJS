import { decreaseCount, increaseCount } from "./actionCreator.mjs";
import { store } from "./reducer.mjs";

const fragment = document.createDocumentFragment();

const increaseBtnElement = document.createElement("button");
increaseBtnElement.id = "increaseBtn";
increaseBtnElement.textContent = "UP";
const decreaseBtnElement = document.createElement("button");
decreaseBtnElement.id = "decreaseBtn";
decreaseBtnElement.textContent = "DOWN";

fragment.appendChild(increaseBtnElement);
fragment.appendChild(decreaseBtnElement);

document.body.appendChild(fragment);

increaseBtnElement.addEventListener("click", function () {
  store.dispatch(increaseCount());
});

decreaseBtnElement.addEventListener("click", function () {
  store.dispatch(decreaseCount());
});
