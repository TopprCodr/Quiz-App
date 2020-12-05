import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import BasicButton from "../components/BasicButton";

export default function QuizDetails({
    route: {
        params: {
            quizImgUri,
            quizName,
            quizDesc,
            quizType,
            questions,
        } = {},
    } = {},
    navigation,
}) {
    //function to handle when any quiz item is clicked on
    function hanldeAddQstnBtnClick() {
        console.log("add qstn btn clicked");
        navigation.navigate('Add Question');
    }

    //component rendering
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{quizName}</Text>
            <Text style={styles.subtitle2}>{quizType}</Text>

            <Image source={quizImgUri || require("../../assets/quiz.jpg")} style={styles.image} />
            <View style={styles.divider}></View>

            <Text style={styles.subtitle}>{quizDesc}</Text>
            <View style={styles.divider}></View>

            <View style={styles.qstnContainer}>
                {
                    questions.map((item, idx) => {
                        return (
                            <View style={styles.qstn} key={idx}>
                                <Text style={styles.qstnText}>{idx + 1 + ". " + item.title}</Text>
                            </View>
                        )
                    })
                }
            </View>
            <View style={styles.divider}></View>

            <BasicButton
                text="Add Question"
                onPress={hanldeAddQstnBtnClick}
            />
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 30,
    },

    title: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
    },

    subtitle2: {
        fontSize: 14,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },

    subtitle: {
        fontSize: 16,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },

    divider: {
        paddingVertical: 8,
    },

    image: {
        alignSelf: "center",
        width: "100%",
        height: 200,
        backgroundColor: "#f1f1f1",
    },

    qstnContainer: {
        // backgroundColor: "#f1f1f1",
        padding: 5,
    },

    qstn: {
        padding: 10,
        backgroundColor: 'rgba(113, 205, 220, 0.3)',
        marginVertical: 5,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
    },

    qstnText: {
        fontWeight: '500',
        fontSize: 16,
    }
});
