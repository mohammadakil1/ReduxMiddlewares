import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useCounter } from '../../contexts/CounterContext';

const CounterControls: React.FC = () => {
  const { increment, decrement, reset } = useCounter();

  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});

export default CounterControls;
