// Initialize Firebase (if not already initialized)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAk_vcqul1fXuuPA2LnK5x5vJE3k5BadNg",
    authDomain: "sheltrium.firebaseapp.com",
    databaseURL: "https://sheltrium-default-rtdb.firebaseio.com",
    projectId: "sheltrium",
    storageBucket: "sheltrium.firebasestorage.app",
    messagingSenderId: "669357508971",
    appId: "1:669357508971:web:57023284a4c51e4fc8242e",
    measurementId: "G-1X29W88CPN"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Function to handle button click and redirect to the questions page
function handleQuoteEstimator() {
    window.location.href = 'questions.html';
}

// Add event listener for the Quote Estimator button
document.getElementById("quoteEstimatorButton").addEventListener("click", handleQuoteEstimator);
