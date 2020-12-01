import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, } from 'react-native';

export default function CreateQuiz() {
    const [quiz, setQuiz] = useState(["Algebra Quiz", "Science Quiz"]);

    //function to handle when any quiz item is clicked on
    function handleQuizItemClick(index) {
        console.log(index);
    }

    //fuction to hanlde when add new quiz btn is pressed on
    function handleAddNewQuizBtnClick() {
        console.log("add new quuiz btn pressed");
    }

    //component rendering
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Create Quiz</Text>
            <View style={styles.divider}></View>

        </ScrollView >
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

    divider: {
        paddingVertical: 8,
    },

    addNewBtn: {
        marginTop: 35,
        alignItems: "center",
    },

    addNewBtnText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#2A34DC'
    },
});
