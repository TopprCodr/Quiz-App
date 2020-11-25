import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

import ORDivider from "./ORDivider";
import BasicButton from "./BasicButton";
import GoogleButton from "./GoogleButton";
import LoginSignUpBtn from "./LoginSignUpBtn";

export default function Login() {
    const [log, setLog] = useState("");

    //function to handle when login btn is clicked on
    function handleLoginBtnClick() {
        console.log("login clicked");
    }

    //function to handle when google login btn is clicked on
    function handleGoogleLoginBtnClick() {
        console.log("google login clicked");
    }

    //function to handle when signup btn is clicked on
    function handleSignUpBtnClick() {
        console.log("signup clicked");
    }

    //component rendering
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.inputField}
                    keyboardType="email-address"
                    placeholder="Enter your registered email"
                />

                <View style={styles.divider}></View>

                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.inputField}
                    secureTextEntry
                    placeholder="Enter password"
                />
            </View>

            <BasicButton
                text="Login"
                onPress={handleLoginBtnClick}
            />

            <Text style={styles.log}>{log}</Text>

            <ORDivider />

            <GoogleButton
                text="Sign in with google"
                onPress={handleGoogleLoginBtnClick}
            />

            <LoginSignUpBtn
                customStyle={styles.signup}
                text="Don’t have an account?"
                btnText="Sign up"
                onPress={handleSignUpBtnClick}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        marginTop: 60,
        paddingHorizontal: 30,
    },

    title: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
    },

    form: {
        marginVertical: 35,
    },

    label: {
        fontSize: 16,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },

    inputField: {
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#BFBFBF',
        paddingVertical: 6,
    },

    divider: {
        paddingVertical: 8,
    },

    log: {
        textAlign: "center",
        marginVertical: 2,
    },

    signup: {
        marginTop: 40,
    }
});
