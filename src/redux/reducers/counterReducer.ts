const initialState = {
  count: 0,
};

const counterReducer = (
  state = initialState,
  action: {
    payload: number;
    type: any;
  },
) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
      return {...state, count: state.count - 1};
    case 'ADD_TO_COUNTER':
      return {...state, count: state.count + action.payload};
    default:
      return state;
  }
};

export default counterReducer;
