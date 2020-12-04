import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BasicButton from "./BasicButton";

export default function Landing({ navigation }) {
    useEffect(async () => {
        const val = await AsyncStorage.getItem('loggedUserId');
        console.warn("val", val);
    }, []);

    //function to handle when login btn is clicked on
    function handleLoginBtnClick() {
        navigation.navigate('Login');
    }

    //function to handle when signup btn is clicked on
    function handleSignUpBtnClick() {
        navigation.navigate('Signup');
    }

    //component rendering
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quizmania</Text>
            <View style={styles.divider}></View>
            <BasicButton
                text="Login"
                onPress={handleLoginBtnClick}
            />
            <View style={styles.divider}></View>
            <BasicButton
                text="Signup"
                onPress={handleSignUpBtnClick}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 0,
        paddingHorizontal: 30,
        justifyContent: "center",
    },

    animation: {
        width: "100%",
        backgroundColor: "#f1f1f1",
        marginBottom: 50,
    },

    title: {
        fontWeight: '500',
        fontSize: 30,
        letterSpacing: 0.1,
        textAlign: "center",
    },

    divider: {
        paddingVertical: 8,
    },
});
