/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { Animated, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const App = () => {


  const [response, setResponse] = React.useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://example.com/data');
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  const onButtonPress = React.useCallback(() => {


    ImagePicker.launchImageLibrary({
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
    }, setResponse);

  }, []);

  return (
    <View style={styles.container} >

      <TouchableOpacity onPress={() => onButtonPress()}
      ><Text>{'Open Image'}</Text></TouchableOpacity>

      {response?.assets &&
        response?.assets.map(({ uri }) => (
          < View key={uri} style={{
            marginVertical: 24,
            alignItems: 'center',
          }}>
            <Image
              resizeMode="cover"
              resizeMethod="scale"
              style={{ height: 100, width: 100, backgroundColor: 'blue' }}
              source={{ uri: uri }}
            />
          </View>
        ))
      }

    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
