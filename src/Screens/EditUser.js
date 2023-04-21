/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { editUser } from '../Store/actions/userActions';

const EditUser = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const { user } = route.params;
        setName(user.name);
        setEmail(user.email);
    }, []);

    const handleUpdateUser = () => {
        const { user } = route.params;
        console.log(user, 'infofo');

        let _user = { name, email, id: user.id };
        try {
            dispatch(editUser(_user));

        } catch (error) {
            console.log(error, 'error');
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Button title="Update User" onPress={handleUpdateUser} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

export default EditUser;
