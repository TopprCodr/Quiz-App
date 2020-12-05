import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import firebase from '../FirebaseConfig';

import QuizItem from "../components/QuizItem";

export default function MyQuizes({ navigation }) {
    const [quiz, setQuiz] = useState([{
        "quiz_name": "Algebra Quiz",
        "quiz_img_uri": "https://squeakychimp.com/wp-content/uploads/2016/11/math-algebra-legging-texture.jpg",
    },
    {
        "quiz_name": "McLaren Quiz",
        "quiz_img_uri": "",
    },
    {
        "quiz_name": "Cricket Quiz",
        "quiz_img_uri": "https://wp-seo-mainpage.s3-accelerate.amazonaws.com/uploads/cricket-players.jpg",
    },
    {
        "quiz_name": "Advance Algorithm Quiz",
        "quiz_img_uri": "https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg",
    },
    ]); //will be fetched from db

    const [isLoading, setIsLoading] = useState(true);
    const [snackBarVisible, setSnackBarVisible] = useState(false);
    const [snackBarText, setSnackBarText] = useState("");
    const [snackBarType, setSnackBarType] = useState("");

    //component did mount
    useEffect(() => {
        //getting users data from firebase
        fetchUsersQuizes();
    }, []);

    //function to fetch quizes of the user
    async function fetchUsersQuizes() {
        const loggedUserId = await AsyncStorage.getItem('loggedUserId');
        if (loggedUserId) {
            const usersDbRef = firebase.app().database().ref('users/');
            usersDbRef
                .child(loggedUserId)
                .once('value')
                .then(resp => {
                    const response = resp.val();
                    if (response) {
                        setIsLoading(false);
                    }
                })
                .catch(error => {
                    displaySnackBar("error", "Failed to fetch profile");
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

    //fuction to hanlde when add new quiz btn is pressed on
    function handleAddNewQuizBtnClick() {
        console.log("add new quuiz btn pressed");
        //redirecting to CreateQuiz.js
        navigation.navigate('CreateQuiz');
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
                                        name={item.quiz_name}
                                        imageUrl={item.quiz_img_uri}
                                        onPress={handleQuizItemClick}
                                    />
                                )
                            })
                        }

                        <TouchableOpacity style={styles.addNewBtn} onPress={handleAddNewQuizBtnClick}>
                            <Text style={styles.addNewBtnText}>+ Add new quiz</Text>
                        </TouchableOpacity>
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

    addNewBtn: {
        marginTop: 35,
        alignItems: "center",
    },

    addNewBtnText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#2A34DC'
    },

    loaderContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        justifyContent: "center",
    },
});
