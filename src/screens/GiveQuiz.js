import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import BasicButton from "../components/BasicButton";

export default function GiveQuiz({ route: {
    params: {
        quizImgUri,
        quizName,
        questions,
    } = {},
} = {},
    navigation,
}) {
    const totalQstnsCount = Object.keys(questions).length || 0;

    const [quizQsnts, setQuizQsnts] = useState([]);

    const [activeQstnIdx, setActiveQstnIdx] = useState(0);
    const [selectedOptionIdx, setSelectedOptionIdx] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (questions) {
            //shuffling options of the qstn
            let qstns = [];
            for (const qstnId in questions) {
                let qstn = questions[qstnId];
                let options = qstn.options;
                options = shuffle(options);
                qstn["options"] = options;
                qstns.push(qstn);
            }
            setQuizQsnts(qstns);
            setIsLoading(false);
        }
    }, []);

    //function to handle when any option is clicked clicked on
    function handleOptionPressed(idx) {
        if (idx != null) {
            setSelectedOptionIdx(idx);
        }
    }

    //function to rdner question
    function renderQuestion() {
        if (questions) {
            const selectedQuestion = quizQsnts[activeQstnIdx] || {};
            const options = selectedQuestion.options || [];

            //rendering
            return (
                <ScrollView style={styles.scroll}>
                    <View style={styles.qstnContainer}>
                        <Text style={styles.qstnCount}>{activeQstnIdx + 1 + " of " + totalQstnsCount}</Text>
                        <Text style={styles.qstnText}>{selectedQuestion.question}</Text>
                    </View>

                    {
                        options.map((item, idx) => {
                            let optionImgSrc = require("../../assets/option.png");
                            let optionBorder = null;

                            const isAns = item.isAns;
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
                                    <Text style={styles.optionText}>{item.option}</Text>
                                    <Image style={styles.optionImg} source={optionImgSrc} />
                                </TouchableOpacity>
                            )
                        })
                    }

                    <View style={[styles.container, styles.btnsContainer]}>
                        {renderDirectionButtons()}
                    </View>

                    <View style={styles.divider}></View>
                    <BasicButton
                        key={1}
                        text="Submit"
                        onPress={hanldeNextBtnClick}
                    />
                    <View style={styles.divider}></View>
                    <View style={styles.divider}></View>
                </ScrollView>
            )
        }
    }

    //function to render direction buttons
    function renderDirectionButtons() {
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
            setSelectedOptionIdx(null);
            setActiveQstnIdx(activeQstnIdx - 1);
        }
    }

    function hanldeNextBtnClick() {
        if (activeQstnIdx < totalQstnsCount - 1) {
            setSelectedOptionIdx(null);
            setActiveQstnIdx(activeQstnIdx + 1);
        }
    }

    //function to shuffle options
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    //component rendering
    return (
        <View style={styles.root}>
            {
                isLoading ?
                    <ActivityIndicator style={styles.loader} />
                    :
                    <>
                        <View style={styles.container}>
                            <Text style={styles.title}>{quizName}</Text>
                            <View style={styles.divider}></View>
                        </View>

                        <Image source={quizImgUri || require("../../assets/quiz.jpg")} style={styles.image} />

                        {renderQuestion()}
                    </>
            }
        </View >
    );
}

const styles = StyleSheet.create({
    root: {
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
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        alignSelf: "center",
        width: "100%",
        height: 250,
        backgroundColor: "#f1f1f1",
    },

    scroll: {
        marginTop: 150,
        paddingHorizontal: 30,
    },

    qstnContainer: {
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

    option: {
        backgroundColor: "#fff",
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
        // paddingBottom: 100,
    },

    button: {
        width: "43%",
    }
});
