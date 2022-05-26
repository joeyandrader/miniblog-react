import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCISPqkQRuqqGmM74HNOBZxRZt2sIw-LHc",
    authDomain: "miniblog-da002.firebaseapp.com",
    projectId: "miniblog-da002",
    storageBucket: "miniblog-da002.appspot.com",
    messagingSenderId: "1036227621512",
    appId: "1:1036227621512:web:ade145d082168fd0eae53d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };