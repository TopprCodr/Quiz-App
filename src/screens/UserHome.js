import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import firebase from '../FirebaseConfig';

import QuizItem from "../components/QuizItem";
import SnackBar from "../components/SnackBar";

export default function UserHome() {
    const [quiz, setQuiz] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [snackBarVisible, setSnackBarVisible] = useState(false);
    const [snackBarText, setSnackBarText] = useState("");
    const [snackBarType, setSnackBarType] = useState("");

    //component did mount
    useEffect(() => {
        //getting users quizes from firebase db
        fetchUsersQuizes();
    }, []);

    //function to fetch quizes of the user
    async function fetchUsersQuizes() {
        const loggedUserId = await AsyncStorage.getItem('loggedUserId');
        if (loggedUserId) {
            const quizesDbRef = firebase.app().database().ref('quizes/');
            quizesDbRef
                .once('value')
                .then(resp => {
                    const quizes = resp.val();
                    if (quizes) {
                        //sorting out quizes of that user
                        let quizzes = [];
                        for (const key in quizes) {
                            const quiz = quizes[key];
                            const createdByUserId = quiz.createdByUserId;

                            if (createdByUserId !== loggedUserId) {
                                quizzes.push(quiz);
                            }
                        }
                        quizzes.reverse();
                        setQuiz(quizzes);
                    }
                    setIsLoading(false);
                })
                .catch(error => {
                    displaySnackBar("error", "Failed to get user's quizes");
                });
        } else {
            displaySnackBar("error", "User is not logged in");
        }
    }

    //function to display snackbar
    function displaySnackBar(type, text) {
        setSnackBarType(type);
        setSnackBarText(text);
        setSnackBarVisible(true);
    }

    //function to hide snackbar
    function hideSnackBar() {
        setSnackBarVisible(false);
    }

    //function to handle when any quiz item is clicked on
    function handleQuizItemClick(index) {
        console.log(index);
    }

    //component rendering
    return (
        <>
            {
                isLoading ?
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator style={styles.loader} />
                    </View>
                    :
                    <ScrollView style={styles.container}>
                        {
                            quiz.map((item, idx) => {
                                return (
                                    <QuizItem
                                        key={idx}
                                        index={idx}
                                        name={item.quizName}
                                        imageUrl={item.quizImgUri}
                                        onPress={handleQuizItemClick}
                                    />
                                )
                            })
                        }
                    </ScrollView >
            }

            {
                snackBarVisible ?
                    <SnackBar
                        isVisible={snackBarVisible}
                        text={snackBarText}
                        type={snackBarType}
                        onClose={hideSnackBar}
                    />
                    : null
            }
        </>
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

    divider: {
        paddingVertical: 8,
    },

    loaderContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        justifyContent: "center",
    },
});
