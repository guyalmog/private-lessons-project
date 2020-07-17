//const  db = firebase.database().ref();



/* firebase.auth().onAuthStateChanged(firebaseUser => {
  if(!firebaseUser)
     window.location = "../login/index.html";

  else
    console.log("this line shoud be executed once for each login");

}) */

/* $("#logout_btn").on("click",function(){
  firebase.auth().signOut();
}); */


const
    range = document.getElementById('rangeSlider'),
    rangeV = document.getElementById('rangeV'),
    setValue = ()=>{
        const
            newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
            newPosition = 10 - (newValue * 0.2);
        rangeV.innerHTML = `<span>${range.value}</span>`;
        rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);


 $("#searchBtn").on("click",function(){

  
  var delveryMethod = $("#ddl_language").children("option:selected").val();
  console.log(delveryMethod);



/*
  var rootRef = firebase.database.ref();
  var usersRef = rootRef.child("Users");
  var teachersRef = usersRef.child("Teachers");
  teachersRef.

  ref.orderByChild("height").limitToFirst(2).on("child_added", function(snapshot) {
    // This will be called exactly two times (unless there are less than two
    // dinosaurs in the Database).
  
    // It will also get fired again if one of the first two dinosaurs is
    // removed from the data set, as a new dinosaur will now be the second
    // shortest.
    console.log(snapshot.key);
  });
  */
}); 