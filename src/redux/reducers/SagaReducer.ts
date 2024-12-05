interface DataState {
    data: Array<{ id: number; title: string }>;
  }
  
  const initialState: DataState = {
    data: [],
  };
  
  interface Action {
    type: string;
    payload?: any;
  }
  
  const sagaReducer = (state = initialState, action: Action): DataState => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default sagaReducer;
  