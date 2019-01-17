import firebase from 'firebase'
import { Message } from 'semantic-ui-react';

export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: "598906308344",
        apiKey: "AIzaSyDYW4bWAQUA8UmKW_rWK3rJn0e-cJ3aRyk",
        authDomain: "hackedwebapp.firebaseapp.com",
        databaseURL: "https://hackedwebapp.firebaseio.com",
        projectId: "hackedwebapp",
        storageBucket: "hackedwebapp.appspot.com",
    });
}

export const askForPermissionToReceiveNotifications = async() => {
    try {
        const messaging = firebase.messaging();
        
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log(token);
    

        /*const userId = firebase.auth().currentUser.uid;
        var key = 'AAAAi3GZBvg:APA91bFnDI9xYCGL7urnJsDvcvGVn8XRLN7v52xsbr36qkcUOftnMwYHuPe5XZvZWk4vIkRL3qko6_iP9tJpvcRdUCNNe6TXLElrGEhMWsibuXMsd6j5Fl1QX_Lh0VFGHAY2by2rPtr7';
        var topic = 'all';
        
        fetch('https://iid.googleapis.com/iid/v1/' + token + '/rel/topics/' + topic, {
          'method': 'POST',
          'headers': {
            'Authorization': 'key=' + key,
            'Content-Type': 'application/json'
          }
        }).then(function(response) {
          console.log(response);
        }).catch(function(error) {
          console.error(error);
        });*/

        return token;
    } catch (error) {
        console.log(error);
    }
}
