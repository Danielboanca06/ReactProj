import {initializeApp} from "firebase/app"
import {getDatabase} from "firebase/database";


function StartFirebase () {
  const firebaseConfig = {
    databaseURL: "https://barberapp-e3a5c.firebaseio.com",  
      apiKey: "AIzaSyB2v8XYF1ETiyItj_llvhIYXqAe8A7SmCk",
      authDomain: "barberapp-e3a5c.firebaseapp.com",
      projectId: "barberapp-e3a5c",
      storageBucket: "barberapp-e3a5c.appspot.com",
      messagingSenderId: "90608790059",
      appId: "1:90608790059:web:c75ef0a31ed8ed17e0986e",
      measurementId: "G-RX4NTMW2FM"
    };
    const app  = initializeApp(firebaseConfig);
    return getDatabase(app)
}




export default StartFirebase;