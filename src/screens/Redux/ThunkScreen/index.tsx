import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../../../redux/actions/ThunkActions';

const ThunkScreen = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state: any) => state.data);
  console.log('data->', data);

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchData());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.countText}>Thunk Screen</Text>
      <ScrollView>
        {data.map((item: any) => (
          <Text key={item.id} style={styles.itemText}>
            {item.title}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThunkScreen;
