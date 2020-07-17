
const  db = firebase.database();

//profile attributes
var languages_I_teach = [];
var also_speak = [];
var homeCountry ="";




var userID;
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {

     window.location = "../login/index.html";
  } else {
    userID = user.uid;
    console.log("this line shoud be executed once for each login");
  }
});



$("#logout_btn").on("click",function(){
  firebase.auth().signOut();
});


$("select.home_country").on("click", function(e) {
  homeCountry = $(this).children("option:selected").val();
  console.log("&&&&&&&&&&&&&77777: "  +homeCountry);

});

$('input[name=checkbox]').change(function(){
    if($(this).is(':checked')) {
        console.log("added: " +  $(this).value.text())
    } else {
          console.log("removed: " +  $(this).val())
    }
});




function upadate_array_by_checkbox(name, arr){
  var items=document.getElementsByName(name);
  for(var i=0; i<items.length; i++){
    if(items[i].type=='checkbox' && items[i].checked==true)
      arr.push(items[i].value);
  }
}


$("#save_btn").on("click",function(){
  upadate_array_by_checkbox('teach', languages_I_teach);
  upadate_array_by_checkbox('speak', also_speak);
  console.log("languages_I_teach: " + languages_I_teach);
  console.log("also_speak: " + also_speak);
  path = "Users/Teachers/"+userID+"/";

  db.ref(path).update({'name':$(".Name").val()});
  db.ref(path).update({'homeCountry':homeCountry});
  db.ref(path).update({'languages_I_teach':languages_I_teach});
  db.ref(path).update({'alsoSpeak':also_speak});
  db.ref(path).update({'lessonPrice':$(".Lesson_price").val()});


});

function read(data){
    // db.ref("Users/Students/WB4ZK1wiK3RGwhvd1hQ67gvENEz1").on("value", read);
  console.log("enter got_data");
  var questions_obj = data.val();
  // var keys = Object.keys(questions_obj);
  // console.log("keys: " + keys);
    console.log("email: " + data.val().userEmail);

}
