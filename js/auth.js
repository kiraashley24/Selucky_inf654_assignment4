import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDr7WuXjei_cH93d4G3uHCcvAaCMgi2aXQ",
    authDomain: "homegrownrecipes-c0097.firebaseapp.com",
    projectId: "homegrownrecipes-c0097",
    storageBucket: "homegrownrecipes-c0097.appspot.com",
    messagingSenderId: "448917629254",
    appId: "1:448917629254:web:2b9237bc20ada549841d47"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //get user info
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //signed in
        const user = userCredential.user;
        console.log(user);
        const modal = document.querySelector("#modal-signup");
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
});

//Logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e)=>{
    e.preventDefault;
    signOut(auth).then(()=>{
        console.log("User has signed out");
    }).catch((error)=>{
        //error happened
    });
});

//Login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;
    signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        //signed in
        const user = userCredential.user;
        console.log(user);
        const modal = document.querySelector("#modal-signup");
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
});