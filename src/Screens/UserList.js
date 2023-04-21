/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Button, View, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../Store/actions/userActions';

const UserList = ({ navigation }) => {
    const users = useSelector((state) => state.userReducer.users);
    const dispatch = useDispatch();

    console.log(users, 'users');
    const handleDeleteUser = (userId) => {
        dispatch(deleteUser(userId));
    };

    return (
        <View>
            <Button
                title="Add User"
                onPress={() => navigation.navigate('AddUser')}
            />
            <FlatList
                data={users}
                renderItem={(item) => {
                    console.log(item, 'naam');
                    return (
                        <View style={styles.item}>
                            <Button
                                title="Edit"
                                onPress={() => navigation.navigate('EditUser', { user: item.item })}
                            />
                            <Button
                                title="Delete"
                                onPress={() => handleDeleteUser(item.item.id)}
                            />
                            <View style={{ width: '50%', height: 30, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center' }}>{item.item.name}</Text>
                                <Text style={{ textAlign: 'center' }}>{item.item.email}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default UserList;
