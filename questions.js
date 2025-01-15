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

// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("questionnaire").addEventListener("submit", (e) => {
        e.preventDefault();

        // Get responses from the form
        const answers = {
            q1: document.getElementById("q1").value,
            q2: document.getElementById("q2").value,
            q3: document.getElementById("q3").value,
            q4: document.getElementById("q4").value,
            q5: document.getElementById("q5").value
        };

        // Validate q1, q2, q3
        if (answers.q1 === "" || answers.q2 === "" || answers.q3 === "") {
            alert("Please answer all required questions (q1, q2, q3).");
            return;
        }

        // Retrieve the selected option (purchase/lease) from localStorage
        const selectedOption = localStorage.getItem("selectedOption");

        // Save the responses to Firebase under the selected option
        set(ref(db, `${selectedOption}/responses`), answers)
            .then(() => {
                alert("Thank you for your response!");
            })
            .catch((error) => {
                console.error("Error saving data: ", error);
            });
    });
});
