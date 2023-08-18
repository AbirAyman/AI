var firebaseConfig = {
  apiKey: "AIzaSyACN4TcXZgbsw5SbQpGbaUKh1dqVw0kKrk",
  authDomain: "aymanproject-cec66.firebaseapp.com",
  databaseURL: "https://aymanproject-cec66-default-rtdb.firebaseio.com",
  projectId: "aymanproject-cec66",
  storageBucket: "aymanproject-cec66.appspot.com",
  messagingSenderId: "674677323531",
  appId: "1:674677323531:web:9464dd297fe896169b940e"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

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