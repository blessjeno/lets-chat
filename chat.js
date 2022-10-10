// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyAHaFGJesVe_-Oviram1XdiUDdNfXRsM7c",
  authDomain: "chat-room-9db15.firebaseapp.com",
  projectId: "chat-room-9db15",
  storageBucket: "chat-room-9db15.appspot.com",
  messagingSenderId: "290938018434",
  appId: "1:290938018434:web:c1abedc017395806d8329b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name" , user_name);

   window.location = "chat_room.html";
}



