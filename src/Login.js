import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import ORDivider from "./ORDivider";
import BasicButton from "./BasicButton";
import GoogleButton from "./GoogleButton";

export default function Login() {
    const [log, setLog] = useState("");

    function handleLoginBtnClick() {
        console.log("login clicked");
    }

    function handleGoogleLoginBtnClick() {
        console.log("google login clicked");
    }

    //component rendering
    return (
        <View style={styles.container}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
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
});
