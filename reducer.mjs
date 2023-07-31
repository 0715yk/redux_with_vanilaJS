import { initCount } from "./actionCreator.mjs";
import { createStore } from "./store.mjs";

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "init":
      return {
        ...state,
        count: 0,
      };

    case "increase":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrease":
      return {
        ...state,
        count: state.count - 1 > 0 ? state.count - 1 : 0,
      };

    case "inputIncrease":
      return {
        ...state,
        count: state.count + action.input,
      };

    case "inputDecrease":
      return {
        ...state,
        count: state.count - action.input > 0 ? state.count - action.input : 0,
      };

    default:
      return state;
  }
}

export const store = createStore(reducer);
store.dispatch(initCount());

// store.dispatch({ type: "init" });
// console.log(store.getState());

// store.dispatch({ type: "increase" });
// console.log(store.getState());

// store.dispatch({ type: "increase" });
// console.log(store.getState());

// store.dispatch(inputCount(10)); // input값 10도 함께 전달한다.
// console.log(store.getState()); // { count: 10 }
