const types = {
  INIT: "init",
  INCREASE: "increase",
  DECREASE: "decrease",
  INPUT_INCREASE: "inputIncrease",
  INPUT_DECREASE: "inputDecrease",
};

// 'input' Action Creator도 만들어준다.

export function initCount() {
  return {
    type: types.INIT,
  };
}

export function increaseCount() {
  return {
    type: types.INCREASE,
  };
}

export function decreaseCount() {
  return {
    type: types.DECREASE,
  };
}

export function inputIncreaseCount(input) {
  return {
    type: types.INPUT_INCREASE,
    input,
  };
}

export function inputDecreaseCount(input) {
  return {
    type: types.INPUT_DECREASE,
    input,
  };
}
