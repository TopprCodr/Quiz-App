import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBhRRNvp03-NOeDn8aOHg7BbzEpBFvHa4k",
    authDomain: "quiz-app-e6a19.firebaseapp.com",
    databaseURL: "https://quiz-app-e6a19.firebaseio.com",
    projectId: "quiz-app-e6a19",
    storageBucket: "quiz-app-e6a19.appspot.com",
    messagingSenderId: "556840162650",
    appId: "1:556840162650:web:04da73388c98bc546ecf63"
}

firebase.initializeApp(firebaseConfig);
export default firebase.storage();