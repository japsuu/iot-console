import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-bbBsvQ4GJRCFQ5Pg1WloxcBk6dIqDMQ",
  authDomain: "iot-console-63e2e.firebaseapp.com",
  databaseURL: "https://iot-console-63e2e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iot-console-63e2e",
  storageBucket: "iot-console-63e2e.appspot.com",
  messagingSenderId: "1011196049591",
  appId: "1:1011196049591:web:a3881d095c615b4265b532",
  measurementId: "G-HBN4W9ZZYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);
const analytics = getAnalytics(app);

// Get a reference to the temperature and humidity data
const tempRef = ref(db, 'temperature');
const humidityRef = ref(db, 'humidity');

// Listen for changes in the temperature data
onValue(tempRef, (snapshot) => {
  const temp = snapshot.val();
  // Update the temperature element in the HTML
  const timedate = new Date(temp.timestamp).toLocaleString();
  document.getElementById('temperature').textContent = `Temperature: ${temp.data} °C, at ${timedate}`;
});

// Listen for changes in the humidity data
onValue(humidityRef, (snapshot) => {
  const humidity = snapshot.val();
  // Update the humidity element in the HTML
  const timedate = new Date(humidity.timestamp).toLocaleString();
  document.getElementById('humidity').textContent = `Humidity: ${humidity.data} %, at ${timedate}`;
});
