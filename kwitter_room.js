
//ADD YOUR FIREBASE LINKS HERE
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