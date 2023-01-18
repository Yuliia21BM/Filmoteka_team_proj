import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  connectAuthEmulator,
  signOut,
} from 'firebase/auth';
import { IS_LOGED } from './config';

import { iconCross } from './create-images-for-js-input';
import swal from 'sweetalert';

// import {getDatabase} from "firebase/database";

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.closeModalBtn.appendChild(iconCross);

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
document.addEventListener('keydown', escClose);

export function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
function escClose(e) {
  if (e.key === 'Escape') {
    refs.modal.classList.add('is-hidden');
  }
}

// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyDgfwSR24olSnYZLDLM-icYYxbVwf46d2w',
  authDomain: 'filmoteka-team-proj.firebaseapp.com',
  databaseURL:
    'https://filmoteka-team-proj-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-team-proj',
  storageBucket: 'filmoteka-team-proj.appspot.com',
  messagingSenderId: '1008290292863',
  appId: '1:1008290292863:web:00de032de04d4c26064b4a',
  measurementId: 'G-4K0E4519N0',
});
const auth = getAuth(app);
// console.log(app);

const email = document.getElementById('user-email');

const password = document.getElementById('user-pas');
const modalForm = document.querySelector('.modal-form');
const modalTitle = document.querySelector('.modal-title');
const btnLogin = document.getElementById('btn-login');
const btnSignUp = document.getElementById('btn-signup');
const btnLogout = document.getElementById('btn-logout');

// connectAuthEmulator(auth, "http://localhost:9099");

async function loginEmailPassword(e) {
  e.preventDefault();
  const loginEmail = email.value;
  const loginPassword = password.value;
  // console.log(loginEmail);
  // console.log(loginPassword);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    // console.log(userCredential.user);
    // alert('You logged in');
    refs.modal.classList.toggle('is-hidden');
    swal("Great job!!!", "You logged in))", {
    button: ["Aww yiss!"],
    icon:"success",
    });
    
    localStorage.setItem(IS_LOGED, 'true');
    email.value = '';
    password.value = '';
  } catch (error) {
    console.log(error.message);
    swal ("Smth wrong (((", {
      icon: "error",
    });
    // alert(error);
    localStorage.setItem(IS_LOGED, 'false');
  }
}

btnLogin.addEventListener('click', loginEmailPassword);
// document.querySelector('input').value= '' ;

async function createAccount(e) {
  e.preventDefault();
  const loginEmail = email.value;
  const loginPassword = password.value;
  // console.log(loginEmail);
  // console.log(loginPassword);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    // console.log(userCredential.user);
    // alert('You signed up');
    swal("You did it)))", "Account created", {
      // button: "Aww yiss!",
      icon:"success",
      });
    localStorage.setItem(IS_LOGED, 'true');
    email.value = '';
    password.value = '';
  } catch (error) {
    // console.log(error.message);
    swal ("Smth wrong (((", {
      icon: "error",
    });
    // alert(error);
    localStorage.setItem(IS_LOGED, 'false');
  }
}
btnSignUp.addEventListener('click', createAccount);

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      // console.log(user);
      localStorage.setItem(IS_LOGED, 'true');
      // alert('you are logged in')
      swal ("you are logged in!!!", {
        icon: "info",
      });
      btnLogout.classList.remove('is-hidden');
      modalForm.classList.add('is-hidden');
      modalTitle.classList.add('is-hidden');
    } else {
      // alert('signed out');
      swal ("you've logged out!!!", {
        icon: "info",
      });
      localStorage.setItem(IS_LOGED, 'false');
    }
  });
};
monitorAuthState();

async function logout() {
  await signOut(auth);
  location.reload();
}

btnLogout.addEventListener('click', logout);
localStorage.getItem(IS_LOGED);
