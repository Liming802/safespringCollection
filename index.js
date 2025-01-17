// // Initialize Firebase (if not already initialized)
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyAk_vcqul1fXuuPA2LnK5x5vJE3k5BadNg",
//     authDomain: "sheltrium.firebaseapp.com",
//     databaseURL: "https://sheltrium-default-rtdb.firebaseio.com",
//     projectId: "sheltrium",
//     storageBucket: "sheltrium.firebasestorage.app",
//     messagingSenderId: "669357508971",
//     appId: "1:669357508971:web:57023284a4c51e4fc8242e",
//     measurementId: "G-1X29W88CPN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// // Function to handle button click
// function handleQuoteEstimator() {
//     // Generate a unique folder name using the current timestamp
//     const timestamp = new Date().toISOString()
//         .replace(/:/g, "-") // Replace ":" with "-"
//         .replace(/\./g, "-"); // Replace "." with "-"

//     const folderName = `User_${timestamp}`;

//     // Save to Firebase
//     set(ref(db, folderName), {
//         option: "QuoteEstimator",
//         timestamp: new Date().toISOString() // Original ISO timestamp for reference
//     })
//         .then(() => {
//             // Store the folder name in localStorage
//             localStorage.setItem("userFolder", folderName);

//             // Redirect to the second page (questions.html)
//             window.location.href = 'questions.html';
//         })
//         .catch((error) => {
//             console.error("Error saving data: ", error);
//         });
// }

// // Add event listener for the Quote Estimator button
// document.getElementById("quoteEstimatorButton").addEventListener("click", handleQuoteEstimator);
