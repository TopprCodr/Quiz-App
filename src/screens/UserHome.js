import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import QuizItem from "../components/QuizItem";

export default function UserHome() {
    const [quiz, setQuiz] = useState([
        {
            "quiz_name": "Cars Quiz",
            "quiz_img_uri": "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/1-corvette-stingray-c8-2019-fd-hr-hero-front.jpg?itok=lZDgmaY1",
        },
        {
            "quiz_name": "Robotics Quiz",
            "quiz_img_uri": "https://www.disruptivestatic.com/wp-content/uploads/2018/05/machine-learning-ecommerce-blog-1.jpg",
        },
        {
            "quiz_name": "Cricket Quiz",
            "quiz_img_uri": "https://wp-seo-mainpage.s3-accelerate.amazonaws.com/uploads/cricket-players.jpg",
        },
        {
            "quiz_name": "NLM Quiz",
            "quiz_img_uri": "https://image1.slideserve.com/2650227/newton-s-first-law-of-motion-n.jpg",
        },
        {
            "quiz_name": "Politics Quiz",
            "quiz_img_uri": "https://www.pambazuka.org/sites/default/files/styles/flexslider_full/public/field/image/event-page-identity-politics_0.jpeg?itok=6HOE-fVZ",
        },
    ]); //will be fetched from db

    //function to handle when any quiz item is clicked on
    function handleQuizItemClick(index) {
        console.log(index);
    }

    //component rendering
    return (
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
