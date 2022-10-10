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

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" oclick='redirectToRoomName(this.id)'>#"+ Room_name+"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}