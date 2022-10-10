
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCDZ01mGR7q71vsNlHj0an9fzZDS-S1c7A",
    authDomain: "kwitter-7af4c.firebaseapp.com",
    databaseURL: "https://kwitter-7af4c-default-rtdb.firebaseio.com",
    projectId: "kwitter-7af4c",
    storageBucket: "kwitter-7af4c.appspot.com",
    messagingSenderId: "983058437797",
    appId: "1:983058437797:web:a7627e41302c94a8e11f4c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
  user_name - document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
  });
}