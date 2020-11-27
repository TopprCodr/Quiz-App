import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, Image, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import BasicButton from "./BasicButton";
import storage from './FirebaseConfig';

export default function Media() {
    const [image, setImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    //component did mount
    useEffect(() => {
        //asking for permission to access phone's gallery
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    //function to handle when Pick Image btn is clicked on
    async function handlePickImgBtnClick() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.cancelled) {
            setIsUploading(true);

            //saving image to firebase
            uploadImage(result.uri)
                .then(() => {
                    setImage(result.uri);
                    Alert.alert("Image Successfully Uploaded");
                    setIsUploading(false);
                })
                .catch((error) => {
                    Alert.alert("Fail to upload Image");
                    setIsUploading(false);
                });
        }
    }

    //function to upload the image in firebase
    async function uploadImage(uri) {
        const timeStamp = Math.floor(Date.now() / 1000);
        const imageName = timeStamp + ".jpg";

        const response = await fetch(uri);
        const blob = await response.blob();

        //putting image in firebase
        const ref = storage.ref().child("image/" + imageName);
        return ref.put(blob);
    }

    //component rendering
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Media Management</Text>
            <View style={styles.divider}></View>

            <BasicButton
                text="Pick Image"
                onPress={handlePickImgBtnClick}
            />

            <View style={styles.divider}></View>
            {
                isUploading ?
                    <ActivityIndicator />
                    : null
            }
            <View style={styles.divider}></View>

            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 60,
        paddingHorizontal: 30,
        justifyContent: "center",
    },

    title: {
        fontWeight: '500',
        fontSize: 30,
        letterSpacing: 0.1,
        textAlign: "center",
    },

    divider: {
        paddingVertical: 8,
    },

    image: {
        alignSelf: "center",
        width: "100%",
        height: 300,
    }
});
