export const fetchData = () => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      // Fetch data from the API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      // Dispatch success action with the fetched data
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors if needed (optional, as your reducer doesn't use an error state)
    }
  };
};
