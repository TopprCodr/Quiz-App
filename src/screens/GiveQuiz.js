import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import BasicButton from "../components/BasicButton";

export default function GiveQuiz({ navigation }) {
    const [quizDetails, setQuizDetails] = useState({
        "quiz_name": "Cars Quiz",
        "quiz_img_uri": "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/1-corvette-stingray-c8-2019-fd-hr-hero-front.jpg?itok=lZDgmaY1",
        "quiz_type": "Computer Quiz",
        "quiz_desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        "questions": [
            {
                "question_id": "jihugyftughiugyu",
                "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy?",
                "options": [
                    {
                        "option_id": "7t6rfuyghkg765tfuyig",
                        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand",
                        "is_ans": false,
                    },
                    {
                        "option_id": "7t6rfuyghkg765tfuyig",
                        "title": "singh",
                        "is_ans": true,
                    },
                    {
                        "option_id": "7t6rfuyghkg765tfuyig",
                        "title": "suman",
                        "is_ans": false,
                    },
                    {
                        "option_id": "7t6rfuyghkg765tfuyig",
                        "title": "deep",
                        "is_ans": false,
                    }
                ]
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

    const [activeQstnIdx, setActiveQstnIdx] = useState(1);
    const [selectedOptionIdx, setSelectedOptionIdx] = useState(null);

    //function to handle when any option is clicked clicked on
    function handleOptionPressed(idx) {
        if (idx != null) {
            setSelectedOptionIdx(idx);
        }
    }

    //function to rdner question
    function renderQuestion() {
        if (quizDetails.questions) {
            const selectedQstnNo = activeQstnIdx + 1;
            const totalQstnsCount = quizDetails.questions.length;

            const selectedQuestion = quizDetails.questions[activeQstnIdx] || {};
            const questionText = selectedQuestion.title;
            const options = selectedQuestion.options || [];

            return (
                <View style={styles.containerRelative}>
                    <View style={styles.containerAbs}>
                        <View style={styles.qstnContainer}>
                            <Text style={styles.qstnCount}>{selectedQstnNo + " of " + totalQstnsCount}</Text>
                            <Text style={styles.qstnText}>{questionText}</Text>
                        </View>

                        <View style={styles.optionsContainer}>
                            {
                                options.map((item, idx) => {
                                    let optionImgSrc = require("../../assets/option.png");
                                    let optionBorder = null;

                                    const isAns = item.is_ans;
                                    if (selectedOptionIdx == idx && isAns) {
                                        optionImgSrc = require("../../assets/rightOption.png");
                                        optionBorder = styles.rightAnsBorder;
                                    } else if (selectedOptionIdx == idx && !isAns) {
                                        optionImgSrc = require("../../assets/wrongOption.png");
                                        optionBorder = styles.wrongAnsBorder;
                                    }

                                    return (
                                        <TouchableOpacity
                                            key={idx}
                                            style={[styles.option, optionBorder]}
                                            onPress={() => handleOptionPressed(idx)}
                                        >
                                            <Text style={styles.optionText}>{item.title}</Text>
                                            <Image style={styles.optionImg} source={optionImgSrc} />
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>

                        <View style={[styles.container, styles.btnsContainer]}>
                            {renderDirectionButtons()}
                        </View>
                    </View>
                </View>
            )
        }
    }

    //function to render direction buttons
    function renderDirectionButtons() {
        const totalQstnsCount = quizDetails.questions.length || 0;
        let html = [];

        //prev btn
        if (activeQstnIdx > 0) {
            html.push(<BasicButton
                key={0}
                text="Prev"
                customStyle={styles.button}
                onPress={hanldePrevBtnClick}
            />)
        }

        //next btn
        if (activeQstnIdx < totalQstnsCount - 1) {
            html.push(<BasicButton
                key={1}
                text="Next"
                customStyle={styles.button}
                onPress={hanldeNextBtnClick}
            />)
        }

        return html;
    }

    //function to handle next/prev btn click
    function hanldePrevBtnClick() {
        if (activeQstnIdx > 0) {
            setActiveQstnIdx(activeQstnIdx - 1);
        }
    }

    function hanldeNextBtnClick() {
        const totalQstnsCount = quizDetails.questions.length || 0;
        if (activeQstnIdx < totalQstnsCount - 1) {
            setActiveQstnIdx(activeQstnIdx + 1);
        }
    }

    //component rendering
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Text style={styles.title}>{quizDetails.quiz_name}</Text>
                <View style={styles.divider}></View>
            </View>

            <Image source={{ uri: quizDetails.quiz_img_uri }} style={styles.image} />

            {renderQuestion()}
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },

    container: {
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

    image: {
        alignSelf: "center",
        width: "100%",
        height: 250,
        backgroundColor: "#f1f1f1",
    },

    containerRelative: {
        position: "relative",
    },

    containerAbs: {
        position: 'absolute',
        top: -70,
        left: 0,
        right: 0,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
    },

    qstnContainer: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 8,
        shadowColor: 'black',
        shadowOpacity: .3,
        shadowOffset: { width: 0, height: 1 },
        elevation: 10,
        borderRadius: 8,
        marginBottom: 12,
    },

    qstnCount: {
        fontWeight: '500',
        fontSize: 13,
        letterSpacing: 0.1,
        color: '#B9B9B9',
    },

    qstnText: {
        fontWeight: '500',
        fontSize: 17,
        letterSpacing: 0.1,
        paddingVertical: 14,
        textAlign: "center",
    },

    optionsContainer: {
        width: "100%",
    },

    option: {
        marginVertical: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#C6C6C6",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    optionText: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 0.1,
        color: '#757575',
    },

    rightAnsBorder: {
        borderColor: "#34A853",
    },

    wrongAnsBorder: {
        borderColor: "#EB4335",
    },

    optionImg: {
        width: 16,
        height: 16,
    },

    btnsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
    },

    button: {
        width: "43%",
    }
});
