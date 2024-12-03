import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const FetchData = () => {
  const {data, error, isLoading} = useQuery('fetchData', () =>
    fetch('https://api.example.com/data').then(res => res.json()),
  );

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      {data?.map((user: any) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  );
};

const ReactQuery = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Text style={{color: 'white'}}>ReactQuery</Text> */}
      <FetchData />
    </QueryClientProvider>
  );
};

export default ReactQuery;
