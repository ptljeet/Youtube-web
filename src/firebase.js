import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDJfHiijWyDEELT8n5v-zufhadwLUnjTrE",
    authDomain: "clone-afec7.firebaseapp.com",
    projectId: "clone-afec7",
    storageBucket: "clone-afec7.appspot.com",
    messagingSenderId: "925411863685",
    appId: "1:925411863685:web:c90d071085fd08b58d8dec"
};


firebase.initializeApp(firebaseConfig);

export default firebase.auth()