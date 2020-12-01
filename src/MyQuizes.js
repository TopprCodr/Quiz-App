import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import BasicButton from "./BasicButton";

export default function MyQuizes() {
    const [quiz, setQuiz] = useState(["Maths Quiz", "Science Quiz"]);

    //component rendering
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>My Quizzes</Text>

            {
                quiz.map(item => {

                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        marginTop: 35,
    },

    imageContainer: {
        width: 120,
        height: 120,
        alignSelf: "center",
        shadowColor: 'grey',
        shadowOpacity: .8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 10,
    },

    image: {
        alignSelf: "center",
        width: "100%",
        height: "100%",
        borderRadius: 1000,
    },

    editIcon: {
        width: 20,
        height: 20,
        position: "absolute",
        bottom: 0,
        right: 0,
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

    chartContainer: {
        alignItems: "center",
    },

    totalData: {
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 20,
        color: '#757575',
        marginVertical: 10,
    }
});
