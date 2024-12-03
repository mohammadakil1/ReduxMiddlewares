import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCounter,
  decrement,
  increment,
} from '../../../redux/actions/counterActions';

const Counter = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleAddToCounter = () => {
    let input = parseFloat(inputValue);
    if (!isNaN(input)) {
      dispatch(addToCounter(input));
      setInputValue('');
    } else {
      Alert.alert('Please enter a valid integer!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.countText}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <View style={styles.textInputView}>
        <TextInput
          style={styles.input}
          placeholder="Enter a number"
          keyboardType="numeric"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button title="Add to Counter" onPress={handleAddToCounter} />
      </View>
    </SafeAreaView>
  );
};

export default Counter;
