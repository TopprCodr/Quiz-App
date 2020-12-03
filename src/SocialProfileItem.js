import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import BasicButton from "./BasicButton";

export default function SocialProfileItem({
    customStyle,
    index,
    profilePicUri,
    name,
    email,
    desc,
    quizes = [],
    onPress,
}) {
    function handleOnPress() {
        onPress(index);
    }

    return (
        <TouchableOpacity style={[styles.card, customStyle]} onPress={handleOnPress}>
            <View style={styles.container}>
                <Image source={{ uri: profilePicUri }} style={styles.img} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </View>

            <Text style={styles.desc}>{desc}</Text>

            <View style={styles.quizesContainer}>
                {
                    quizes.map(function(item, idx) {
                        return (
                            <BasicButton
                                key={idx}
                                customStyle={styles.quizBtn}
                                textStyle={styles.btnText}
                                text={item.quizName}
                            />
                        )
                    })
                }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: 8,
        marginVertical: 12,
        padding: 16,
    },

    container: {
        flexDirection: "row",
        alignItems: "center",
    },

    img: {
        width: 60,
        height: 60,
        borderRadius: 1000,
        marginRight: 14,
    },

    name: {
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 20,
        color: '#2E2E2E',
    },

    email: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
        color: '#757575',
    },

    desc: {
        fontSize: 14,
        lineHeight: 20,
        color: '#2E2E2E',
        marginVertical: 15,
    },

    quizesContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    quizBtn: {
        marginHorizontal: 4,
    },

    btnText: {
        fontWeight: '600',
        fontSize: 13,
        lineHeight: 20,
    }
});
