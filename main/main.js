
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(!firebaseUser)
     window.location = "../login/index.html";

  else
    console.log("this line shoud be executed once for each login");

})

$("#logout_btn").on("click",function(){
  firebase.auth().signOut();
});
