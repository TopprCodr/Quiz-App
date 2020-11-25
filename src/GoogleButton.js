import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function BasicButton({
    customStyle,
    text,
    onPress,
}) {
    return (
        <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
            <Image style={styles.img} source={require('../assets/google_ji.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: '#2B35E0',
        borderRadius: 8,
        padding: 2,
    },

    img: {
        width: 44,
        height: 44,
    },

    textContainer: {
        flex: 1,
        justifyContent: "center",
    },

    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: "center",
    },
});
