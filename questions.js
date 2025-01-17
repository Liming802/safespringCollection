// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// Firebase configuration
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

// Track submission state
let step = 1;

// Add event listener for the "Get quote" button
document.getElementById("getQuoteButton").addEventListener("click", () => {
    if (step === 1) {
        // Store the answers for the first six questions
        const initialAnswers = {
            q1: document.getElementById("q1").value,
            q2: document.getElementById("q2").value,
            q3: document.getElementById("q3").value,
            q4: document.getElementById("q4").value,
            q5: document.getElementById("q5").value,
            q6: document.getElementById("q6").value
        };

        // Validate required fields
        if (!initialAnswers.q1 || !initialAnswers.q2 || !initialAnswers.q3) {
            alert("Please answer all required questions.");
            return;
        }

        // Generate user-specific timestamp
        function generateUserTimestamp() {
            const now = new Date();
            return `User_${now.toISOString().replace(/[:.]/g, '-')}`;
        }

        const userTimestamp = generateUserTimestamp();
        localStorage.setItem("userTimestamp", userTimestamp);

        // Save the initial responses to Firebase
        set(ref(db, `${userTimestamp}/responses/step1`), initialAnswers)
            .then(() => {
                // Replace the form with the next set of questions
                document.getElementById("form-title").textContent = "Enter info";
                document.getElementById("initial-questions").innerHTML = `
                    <div class="question">
                        <label for="q7">7. Please enter your ZIP code:</label>
                        <input type="text" id="q7" name="q7" placeholder="Enter your ZIP code" maxlength="10" pattern="\\d{5}(-\\d{4})?" required>
                    </div>
                    <div class="question">
                        <label for="q8">8. Please enter your email address (optional):</label>
                        <input type="email" id="q8" name="q8" placeholder="Enter your email address">
                    </div>
                `;

                // Replace the button with a submit button
                document.getElementById("getQuoteButton").outerHTML = `
                    <button id="submitButton" type="submit">Submit, and we will contact you.</button>
                `;

                step = 2;

                // Add listener for the submit button
                document.getElementById("submitButton").addEventListener("click", handleSubmit);
            })
            .catch((error) => {
                console.error("Error saving data: ", error);
            });
    }
});

// Handle the second submission
function handleSubmit(e) {
    e.preventDefault();

    const finalAnswers = {
        q7: document.getElementById("q7").value,
        q8: document.getElementById("q8").value
    };

    // Validate ZIP code
    if (!/^\d{5}(-\d{4})?$/.test(finalAnswers.q7)) {
        alert("Please provide a valid ZIP code in the format 12345 or 12345-6789.");
        return;
    }

    const userFolder = localStorage.getItem("userTimestamp");

    // Save the final responses to Firebase
    set(ref(db, `${userFolder}/responses/step2`), finalAnswers)
        .then(() => {
            alert("Thank you for completing the form! We will contact you soon.");
        })
        .catch((error) => {
            console.error("Error saving data: ", error);
        });
}
