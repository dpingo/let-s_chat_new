 user_name =localStorage.getItem("user_name");
console.log(user_name)
document.getElementById("user_name").innerHTML="Welcome!! "+ user_name;

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBLhlyIjd5ChOuG2659JwTuteG4RSR5uF8",
    authDomain: "kwitter-5f712.firebaseapp.com",
    databaseURL: "https://kwitter-5f712-default-rtdb.firebaseio.com",
    projectId: "kwitter-5f712",
    storageBucket: "kwitter-5f712.appspot.com",
    messagingSenderId: "941668389859",
    appId: "1:941668389859:web:9fc0317477b630694e46d6",
    measurementId: "G-99SGP0NFK5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
  });});}
  getData();
function addRoom(){
    room_name=document.getElementById("room_name").value;
    console.log(room_name)
    localStorage.setItem("room_name", room_name);
}
