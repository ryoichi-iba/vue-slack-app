import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
 const config = {
     apiKey: "AIzaSyBV2PlTKxQyXN8YvSacrtHlj3RYnK5diSo",
     authDomain: "slack-clone-8fed1.firebaseapp.com",
     databaseURL: "https://slack-clone-8fed1.firebaseio.com",
     projectId: "slack-clone-8fed1",
     storageBucket: "slack-clone-8fed1.appspot.com",
     messagingSenderId: "1095918923596",
     appId: "1:1095918923596:web:8bb251bb2555be46f969e9"
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}