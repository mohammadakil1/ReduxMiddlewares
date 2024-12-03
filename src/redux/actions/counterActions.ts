export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

export const addToCounter = (number: any) => ({
  type: 'ADD_TO_COUNTER',
  payload: number, // Pass the integer as payload
});
