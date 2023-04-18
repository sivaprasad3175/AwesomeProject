/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { Animated, View, StyleSheet, TouchableOpacity, Text, Image, FlatList, SafeAreaView, Dimensions } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carousel from 'react-native-snap-carousel';
import Counter from './src/Screens/Counter';
import { Provider } from 'react-redux';
import store from './src/Store/store';


const App = () => {

  return (
    <SafeAreaView style={styles.container} >
      <Provider store={store}>
        <Counter />
      </Provider>
    </SafeAreaView>
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
