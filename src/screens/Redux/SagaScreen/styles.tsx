import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1},
  countText: {fontSize: 14, marginBottom: 20,color:'white'},
  textInputView:{
    flexDirection:'row'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    color:'white',
    width:150
  },
  containerr: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  itemText: { marginBottom: 10, fontSize: 16 ,color:'white'},
  errorText: { color: 'red', marginBottom: 20 },
});
