
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getFirestore, collection, getDocs, onSnapshot, } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDr7WuXjei_cH93d4G3uHCcvAaCMgi2aXQ",
    authDomain: "homegrownrecipes-c0097.firebaseapp.com",
    projectId: "homegrownrecipes-c0097",
    storageBucket: "homegrownrecipes-c0097.appspot.com",
    messagingSenderId: "448917629254",
    appId: "1:448917629254:web:2b9237bc20ada549841d47"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function getReviews(db) {
    const reviewsCol = collection(db, "reviews");
    const reviewSnapshot = await getDocs(reviewsCol);
    const reviewList = reviewSnapshot.docs.map((doc) => doc);
    return reviewList;
  }

  const unsub = onSnapshot(collection(db, "reviews"), (doc) => {
   // console.log(doc.docChanges());
   doc.docChanges().forEach((change) => {
    console.log(change, change.doc.data(), change.doc.id);
   });
});