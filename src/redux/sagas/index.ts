import { call, put, takeLatest } from 'redux-saga/effects';

interface Post {
  id: number;
  title: string;
}

function* fetchDataSaga() {
  try {
    const response: Response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = yield call([response, 'json']); // Safely parse JSON

    // Dispatch action to update state
    yield put({ type: 'SET_DATA', payload: data });
  } catch (error) {
    console.error('Error fetching data:', error);
    // No error handling as per the requirement
  }
}

// Watcher saga
export default function* watchFetchData() {
  yield takeLatest('FETCH_DATA', fetchDataSaga);
}
