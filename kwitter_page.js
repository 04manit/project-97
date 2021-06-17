var firebaseConfig = {
    apiKey: "AIzaSyAPSntXOWgXcjhIbi2D19YWiqQoj2kws-I",
    authDomain: "class-test-da4bb.firebaseapp.com",
    databaseURL: "https://class-test-da4bb-default-rtdb.firebaseio.com",
    projectId: "class-test-da4bb",
    storageBucket: "class-test-da4bb.appspot.com",
    messagingSenderId: "679376957836",
    appId: "1:679376957836:web:13423293ba9040785f66a9",
    measurementId: "G-Z8PFFQXXHB"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
room_name = localStorage.getItem("Room Name");

username = localStorage.getItem("user_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    //Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name_1 = message_data['room_name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>"+username+"<img style='width: 20px;' class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 style='padding-left: 5px; color: grey;' class='message_h4'>"+message+"</h4>";
    
    row = name_with_tag + message_with_tag;
    document.getElementById("output").innerHTML+=row;
    //End code
 } });  }); }
getData();
function send(){
    message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        room_name:username,
        message:message,
        like:0
    });
    document.getElementById("msg").value = "";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room Name");
    window.location = "index.html";
}