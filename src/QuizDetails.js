import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import BasicButton from "./BasicButton";

export default function QuizDetails() {
    const [quizDetails, setQuizDetails] = useState({
        "quiz_name": "Advance Algorithm Quiz",
        "quiz_img_uri": "https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg",
        "quiz_type": "Computer Quiz",
        "quiz_desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        "questions": [
            {
                "question_id": "jihugyftughiugyu",
                "title": "what is ur name?",
            },
            {
                "question_id": "jihugyftughiugyu",
                "title": "where do u live?",
            },
            {
                "question_id": "jihugyftughiugyu",
                "title": "what is ur age?",
            },
            {
                "question_id": "jihugyftughiugyu",
                "title": "how are you?",
            },
        ]
    }); //will be fetched from db

    //function to handle when any quiz item is clicked on
    function hanldeAddQstnBtnClick() {
        console.log("add qstn btn clicked");
    }

    //component rendering
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Quiz Details</Text>
            <View style={styles.divider}></View>

            <Text style={styles.title}>{quizDetails.quiz_name}</Text>
            <Text style={styles.subtitle}>{quizDetails.quiz_type}</Text>
            <Image source={{ uri: quizDetails.quiz_img_uri }} style={styles.image} />
            <View style={styles.divider}></View>

            <Text style={styles.subtitle}>{quizDetails.quiz_desc}</Text>
            <View style={styles.divider}></View>

            <View style={styles.qstnContainer}>
                {
                    quizDetails.questions.map((item, idx) => {
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
        marginTop: 60,
        paddingHorizontal: 30,
    },

    title: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
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
