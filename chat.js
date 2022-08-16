
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA48T0E2DCT2IJn2FgYW3Y65FqyQH5j854",
    authDomain: "lets-chat-app-891d8.firebaseapp.com",
    databaseURL: "https://lets-chat-app-891d8-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-891d8",
    storageBucket: "lets-chat-app-891d8.appspot.com",
    messagingSenderId: "239289994978",
    appId: "1:239289994978:web:95bab9f562ab012b08d8bb"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
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
  
