/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { Animated, View, StyleSheet, TouchableOpacity, Text, Image, FlatList, SafeAreaView, Dimensions } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import {
    decrement,
    increment,
    selectCount,
} from '../Store/counterSlice';

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container} >

            <TouchableOpacity style={{ height: 100, width: 100, backgroundColor: 'black', borderRadius: 20, padding: 20, justifyContent: 'center' }} onPress={() => {
                dispatch(increment());
            }}>
                <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>{'+'}</Text>
            </TouchableOpacity>
            <Text style={{ color: 'red', fontSize: 30, textAlign: 'center' }}>{count}</Text>
            <TouchableOpacity style={{ height: 100, width: 100, backgroundColor: 'black', borderRadius: 20, padding: 20, justifyContent: 'center' }} onPress={() => {
                dispatch(decrement());
            }}>
                <Text style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>{'-'}</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
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

export default Counter;


