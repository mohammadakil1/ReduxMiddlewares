import {ScrollView, StatusBar, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Fetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json()) // Convert response to JSON
      .then(json => {
        setData(json); // Update state with fetched data
        setLoading(false); // Stop loading
      })
      .catch(error => console.error('Error:', error));
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

export default Fetch;
