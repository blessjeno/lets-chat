//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCDZ01mGR7q71vsNlHj0an9fzZDS-S1c7A",
    authDomain: "kwitter-7af4c.firebaseapp.com",
    databaseURL: "https://kwitter-7af4c-default-rtdb.firebaseio.com",
    projectId: "kwitter-7af4c",
    storageBucket: "kwitter-7af4c.appspot.com",
    messagingSenderId: "983058437797",
    appId: "1:983058437797:web:a94b7b9a082792ebe11f4c"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_Item");
room_name = localStorage.getItem("room_name");
function send()
{
    msg = document.getElementById("msg").ariaValueMax;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log("Room Name -" +Room_names);
row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=row;

//End code
      } });  }); }
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
