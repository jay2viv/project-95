const firebaseConfig = {
  apiKey: "AIzaSyCwIf4XAzrmsCNfqwE9f3IQImza2D2rm18",
  authDomain: "kondonaisan.firebaseapp.com",
  projectId: "kondonaisan",
  storageBucket: "kondonaisan.appspot.com",
  messagingSenderId: "900633254689",
  appId: "1:900633254689:web:29a8963daea50575ecfc60"
};
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "welcome "+  username
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick='reddirectToRoom_Name(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addroom()
{
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"creating a folder"
      });
      window.location = "kwitter_page.html";
}

function reddirectToRoom_Name(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      window.location = "index.html";
      localStorage.removeItem("username");
}