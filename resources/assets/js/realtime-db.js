// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy4qunPyt6XUfNKLrFyrZKdh_JZS99cHA",
  authDomain: "clear-coletadelixo.firebaseapp.com",
  projectId: "clear-coletadelixo",
  storageBucket: "clear-coletadelixo.appspot.com",
  messagingSenderId: "627981035134",
  appId: "1:627981035134:web:45b704f63542f8a35d9a2f",
  measurementId: "G-0GVSPZDM76",
  databaseURL: "https://clear-coletadelixo-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export const promiseGetLng = new Promise((resolve, reject) => {
  console.log("Calls promiseGetLng ")
  const dbRef = ref(getDatabase());
  get(child(dbRef, `data/lng`)).then((snapshot) => {
    if (snapshot.exists()) {
      resolve(snapshot.val());
    } else {
      console.log("No data available");
      reject(0)
    }
  }).catch((error) => {
    console.error(error);
  });
});

export const promiseGetLat = new Promise((resolve, reject) => {
  console.log("Calls promiseGetLat ")
  const dbRef = ref(getDatabase());
  get(child(dbRef, `data/lat`)).then((snapshot) => {
    if (snapshot.exists()) {
      resolve(snapshot.val());
    } else {
      console.log("No data available");
      reject(0)
    }
  }).catch((error) => {
    console.error(error);
  });
});

export const promiseGetLngLat = new Promise((resolve, reject) => {
  const lngLat = []
  console.log("Calls promiseGetLngLat")
  const dbRef = ref(getDatabase());
  get(child(dbRef, `data/lng`)).then((lng) => {
    if (lng.exists()) {
      console.log("lng: "+lng.val());
      lngLat[0] = lng.val();
      get(child(dbRef, `data/lat`)).then((lat) => {
        if (lat.exists()) {
          console.log("lat: "+lat.val());
          lngLat[1] = lat.val();
          resolve(lngLat);
        } else {
          console.log("No data available");
          reject([0, 0])
        }
      }).catch((error) => {
        console.error(error);
      });
    } else {
      console.log("No data available");
      reject([0, 0])
    }
  }).catch((error) => {
    console.error(error);
  });
  
});