

// athounivation methods
const  db = firebase.database().ref();

$("#login_btn").on("click",function(){
  var email = $(".Email_input").val();
  var password = $(".Password_input").val();
  const auth = firebase.auth();
  var res = auth.signInWithEmailAndPassword(email, password);
  res.catch(e => console.log(e.message));


});



$("#sign_up_btn").on("click",function(){

  var email = $(".Email_input").val();
  var password = $(".Password_input").val();

  var userType = $('input[name=userTypeRadios]:checked').val();
  // var userID =  email.split(".").join("*");
  //
  //
  //
  // var path = "Users/"+ userType +"s/" + userID;
  //  console.log("db path: " + path);
  //  //var db = firebase.database().ref();
  //  db.child(path).set({
  //    userEmail: email,
  //    userType: userType
  //  }).catch(function(error){
  //    console.log("Error ocurred: ", error);
  //  });


  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
      //Registration is successful
      var user = firebase.auth().currentUser;
       var userID = user.uid;

      var path = "Users/"+ userType +"s/" + userID;
       console.log("db path: " + path);
       //var db = firebase.database().ref();
       db.child(path).set({
         userEmail: email,
         userType: userType
       }).catch(function(error){
         console.log("Error ocurred: ", error);
       });
      console.log("user created successfuly");



      }).catch(e => console.log(e.message));

  });




$("#forgot_btn").on("click",function(){
  var auth = firebase.auth();
  var email = $(".Email_input").val();

  auth.sendPasswordResetEmail(email).then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
});


firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser)
    window.location = "../main/main.html";
  else{

    console.log("User hasn't logged in yet");
  }
})



// ---- Firebase function ------

//###################################################



//----On click function for Submit Button
// $("#Add_btn").on("click",function(){
//   console.log("aaaaaaaaaaaaaaa");
//
//
//    db.child("Users/Students/avishay2@gmail*com").set({
//       name: "avishay ophir2",
//       age: 29
//    }).catch(function(error){
//      console.log("Error ocurred: ", error);
//    });
//
// });
