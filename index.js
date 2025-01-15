// Initialize Firebase (if not already initialized)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

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
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to handle user choice
function handleChoice(choice) {
  // Save to Firebase as a folder name
  set(ref(db, choice), {
    option: choice
  }).then(() => {
    // Store the selected option in localStorage
    localStorage.setItem("selectedOption", choice);

    // Redirect to the second page (questions page)
    window.location.href = 'questions.html';
  }).catch((error) => {
    console.error("Error saving data: ", error);
  });
}

// Add event listeners for buttons
document.getElementById("purchaseButton").addEventListener("click", () => handleChoice("Purchase"));
document.getElementById("leaseButton").addEventListener("click", () => handleChoice("Lease"));
