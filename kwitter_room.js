 user_name =localStorage.getItem("user_name");
console.log(user_name)
document.getElementById("user_name").innerHTML="Welcome!! "+ user_name;

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCiB5zpc6EDY91P19_UFSHdWut4Msq6xyY",
  authDomain: "kwitter-project-2efc2.firebaseapp.com",
  databaseURL: "https://kwitter-project-2efc2-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-2efc2",
  storageBucket: "kwitter-project-2efc2.appspot.com",
  messagingSenderId: "627626741479",
  appId: "1:627626741479:web:2253b1044f0fe181099c42",
  measurementId: "G-BQGJC1K257"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("room names- "+Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
   document.getElementById("output").innerHTML+=row;

   //end code
  });});}
  getData();

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name_id", name);
    window.location="kwitter_page.html";

  }
function addRoom(){
    room_name=document.getElementById("room_name").value;

    console.log(room_name)

    localStorage.setItem("room_name", room_name);
    
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room"
    })
    window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}
