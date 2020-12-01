import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function QuizItem({
    customStyle,
    index,
    text,
    onPress,
}) {
    function handleOnPress() {
        onPress(index);
    }

    return (
        <TouchableOpacity style={[styles.box, customStyle]} onPress={handleOnPress}>
            <Text style={styles.boxText} >{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        padding: 10,
        backgroundColor: 'rgba(113, 205, 220, 0.3)',
        marginVertical: 5,
        borderRadius: 8,
    },

    boxText: {
        fontWeight: '500',
        fontSize: 18,
    },
});
