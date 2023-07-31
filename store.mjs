export function createStore(reducer) {
  const listeners = [];
  const publish = () => {
    listeners.forEach((listener) => listener());
  };

  let state;
  // state는 클로저 패턴을 이용해 어디서든 접근할 수 없고, 단지 이 함수 내부의 클로저 함수를 이용해서만 접근할 수 있도록 은닉화한다.
  const getState = () => ({ ...state });
  // 위의 getState 함수의 [[Environment]] 에서 createStore 함수의 렉시컬 환경을 저장하고 있기에 이후 state 변수를 참조할 수 있다(createStore 함수가 소멸해도)
  const dispatch = (action) => {
    state = reducer(state, action);
    publish();
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };
  return {
    getState,
    dispatch,
    subscribe,
  };
}
