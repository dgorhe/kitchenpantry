import React from 'react'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFunctions, httpsCallable } from "firebase/functions";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// TODO: Move this to a more secure location later
const firebaseConfig = {
    apiKey: "AIzaSyBHztsAzjO6hr2iFornldSPI-3wZdobKPM",
    authDomain: "kitchenpantry-c4920.firebaseapp.com",
    databaseURL: "https://kitchenpantry-c4920-default-rtdb.firebaseio.com",
    projectId: "kitchenpantry-c4920",
    storageBucket: "kitchenpantry-c4920.appspot.com",
    messagingSenderId: "256185537287",
    appId: "1:256185537287:web:da48255928342f44f5eba2",
    measurementId: "G-8BE36ZJTPM"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const functions = getFunctions(app);
const echoMessage = httpsCallable(functions, 'echoMessage');

class Classification extends React.Component {
    uploadFile() {
        document.getElementById("fileUpload").click();
    }

    callFunction() {
        const data = {
            "key 1": "value 1",
            "key 2": "value 2"
        };
        echoMessage(data);
    }
    
    render() 
    {
        return(    
        <div class="container-fluid">
            <div class='d-flex justify-content-center my-5'>
                <img src="http://placehold.it/224x224" alt="" />
                
            </div>

            <div class='d-flex justify-content-center my-5'>
                <hr />
                <button onClick={this.uploadFile.bind(this)}>
                    Upload Image
                </button>
                <button onClick={this.callFunction.bind(this)} >
                    Testing
                </button>
                <input id='fileUpload' type="file" style={{display: "none"}}/>
                <hr />
                
            </div>

            <div class='d-flex justify-content-center'>
                <textarea name="output" id="" cols="30" rows="2"></textarea>
            </div>
        </div>
        );
    }
}

export default Classification;