const initialState = {
  loading: false,
  data: [],
};

const dataReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
