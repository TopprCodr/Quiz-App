import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SocialProfileItem from "./SocialProfileItem";

export default function Social() {
    const [users, setUsers] = useState([
        {
            "name": "Thor",
            "profilePicUri": "https://www.feedinspiration.com/wp-content/uploads/2016/08/Faux-Hawk-for-Cute-Kids.jpg",
            "email": "thor@azguard.king",
            "desc": "I am a 3rd grade student i like to play with my friends and play hide and seek with my friends",
            "quizes": [
                {
                    "quizId": "3242rewtgdfb",
                    "quizName": "Game Quiz",
                },
                {
                    "quizId": "3242rewtgdfb",
                    "quizName": "Cars Quiz",
                }
            ]
        },
        {
            "name": "Hulk",
            "profilePicUri": "http://4.bp.blogspot.com/_HOCuXB2IC34/Si9hNtZI3oI/AAAAAAAAB-A/wX_9j1khmNQ/s400/08+%28www.cute-pictures.blogspot.com%29.jpg",
            "email": "hulk@iamboss.com",
            "desc": "I am a 7th grade student i like to play with my friends and play hide and seek.",
            "quizes": [
                {
                    "quizId": "3242rewtgdfb",
                    "quizName": "Computer Quiz",
                },
                {
                    "quizId": "3242rewtgdfb",
                    "quizName": "Maths Quiz",
                }
            ]
        },
    ]);

    //function to handle when any profile card is clicked on
    function handleProfileClick(index) {
        console.log("profile clicked", index);
    }

    //component rendering
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Social</Text>

            {
                users.map(function(item, idx) {
                    return (
                        <SocialProfileItem
                            key={idx}
                            index={idx}
                            profilePicUri={item.profilePicUri}
                            name={item.name}
                            email={item.email}
                            desc={item.desc}
                            quizes={item.quizes}
                            onPress={handleProfileClick}
                        />
                    )
                })
            }
        </View>
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
});
