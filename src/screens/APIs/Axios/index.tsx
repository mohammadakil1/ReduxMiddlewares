import {ScrollView, StatusBar, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Axios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: 'black'}}>
        <View>
          {loading ? (
            <Text>Loading....</Text>
          ) : (
            data?.map((item: any) => (
              <Text style={{color: 'white'}}>{item?.title}</Text>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Axios;
