import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAS2z-d6lUEhT5dB8xSPxmA9JCiEyKDrWA",
    authDomain: "react-portfolio-brolius.firebaseapp.com",
    databaseURL: "https://react-portfolio-brolius.firebaseio.com",
    projectId: "react-portfolio-brolius",
    storageBucket: "react-portfolio-brolius.appspot.com",
    messagingSenderId: "240347295947"
};

firebase.initializeApp(config);

export default firebase;