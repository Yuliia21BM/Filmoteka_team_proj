import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, connectAuthEmulator } from "firebase/auth";
// import {getDatabase} from "firebase/database";

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// const db=getDatabase();


// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgfwSR24olSnYZLDLM-icYYxbVwf46d2w",
  authDomain: "filmoteka-team-proj.firebaseapp.com",
  databaseURL: "https://filmoteka-team-proj-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "filmoteka-team-proj",
  storageBucket: "filmoteka-team-proj.appspot.com",
  messagingSenderId: "1008290292863",
  appId: "1:1008290292863:web:00de032de04d4c26064b4a",
  measurementId: "G-4K0E4519N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
console.log (app);

// const name=getElementById('user-name');
const email=document.getElementById('user-email');
// const username=getElementById('user-nick');
const password=document.getElementById('user-pas');
// const submit=getElementById('btn-sbm');
const btnLogin=document.getElementById('btn-login');
const btnSignUp=document.getElementById('btn-signup');

// connectAuthEmulator(auth, "https://lokalhost:9099");

async function loginEmailPassword() {
  const loginEmail = email.value;
  const loginPassword = password.value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }

  catch (error) {
    console.log(error);
    alert(error);
  }
}

btnLogin.addEventListener ("click", loginEmailPassword);

async function createAccount() {
  const loginEmail = email.value;
  const loginPassword = password.value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }

  catch (error) {
    console.log(error);
    alert(error);
  }
}
btnSignUp.addEventListener ("click", createAccount);

  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });



// function validation() {
  
// let namereg=/[a-zA-Z\s]+/;
// let emailreg=/[a-zA-Z0-9]+@\./;
// let userreg=/[a-zA-Z\s]{3,}/;
// if(!namereg.test(name.value)){
//   alert("ім'я має містити литери");
//   return;
// }

// if(!emailreg.test(email.value)){
//   alert("введіть правильну пошту");
//   return;
// }

// if(!userreg.test(username.value)){
//   alert("ім'якористувача має містити не менше трьох знаків");
//   return
// }

// }

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

  

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });