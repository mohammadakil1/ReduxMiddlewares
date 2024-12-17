import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Fetch from './src/screens/APIs/Fetch';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import ThunkScreen from './src/screens/Redux/ThunkScreen';
import Counter from './src/screens/Redux/Counter';
import SagaScreen from './src/screens/Redux/SagaScreen';
import ReactQuery from './src/screens/APIs/ReactQuery';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();
const App = () => {
  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then((data: any) => data.json())
  //     .then(json => {
  //       console.log('data-->', json.game_indices);
  //     });
  // }, []);
  return (
    // <Provider store={store}>   // redux
    //   <Counter />
    //   <SagaScreen />
    // </Provider>
    // <SafeAreaView>    // APIs hit
    //   <Fetch/>
    // </SafeAreaView>
    <QueryClientProvider client={queryClient}>    // API hit by ReactQuery
      <ReactQuery />
    </QueryClientProvider>
  );
};

export default App;
