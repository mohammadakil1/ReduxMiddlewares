import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const fetchPosts = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const ReactQuery = () => {
  const {data, isLoading, error} = useQuery({
    queryFn: () => fetchPosts(),
    queryKey: ['posts'],
  });

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ReactQuery;
