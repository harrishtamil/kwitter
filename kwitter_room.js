
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBWSzv4t8P1ezyh56BQTQ78LHxY-7jgeBE",
      authDomain: "emerlds-and-ruby-b16a3.firebaseapp.com",
      databaseURL: "https://emerlds-and-ruby-b16a3-default-rtdb.firebaseio.com",
      projectId: "emerlds-and-ruby-b16a3",
      storageBucket: "emerlds-and-ruby-b16a3.appspot.com",
      messagingSenderId: "921870928109",
      appId: "1:921870928109:web:6e2dfb6389b5fdbd70e4e4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

    function addRoom(){
          Room_name=document.getElementById("room_name").Value;
          firebase.database().ref("/").child(Room_name).update({
                purpose:"adding room name"
          });
          
          localStorage.setItem("room_name",Room_name);
          window.location="kwitter_room.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name -"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redrectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redrectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
