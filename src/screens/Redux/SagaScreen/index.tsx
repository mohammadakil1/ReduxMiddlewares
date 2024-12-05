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
import { triggerFetchData } from '../../../redux/actions/sagaActions';

const SagaScreen = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.sagadata);
  // console.log('data->', data);

  useEffect(() => {
    //@ts-ignore
    dispatch(triggerFetchData());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.countText}>Saga Screen</Text>
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

export default SagaScreen;
