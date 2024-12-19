import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useCounter} from '../../contexts/CounterContext';

const CounterDisplay: React.FC = () => {
  const {count} = useCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  text: {
    color: 'gray',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CounterDisplay;
