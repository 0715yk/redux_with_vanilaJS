import { store } from "./reducer.mjs";

const divElement = document.createElement("div");
const spanElement = document.createElement("span");
spanElement.id = "numberResult";
spanElement.textContent = 0;
divElement.appendChild(spanElement);
document.body.appendChild(divElement);

const output = document.querySelector("#numberResult");

store.subscribe(() => {
  const state = store.getState();
  output.textContent = state.count;
});
