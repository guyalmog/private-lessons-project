
const  db = firebase.database();


// firebase.auth().onAuthStateChanged(firebaseUser => {
//   if(!firebaseUser)
//      window.location = "../login/index.html";
//
//   else
//     console.log("this line shoud be executed once for each login");
//
// })


$("#logout_btn").on("click",function(){
  firebase.auth().signOut();
});


$("select.country").on("click", function(e) {
 var selectedCountry = $(this).children("option:selected").val();
  console.log(selectedCountry)//get text of each li

});

$('input[name=checkbox]').change(function(){
    if($(this).is(':checked')) {
        console.log("added: " +  $(this).value.text())
    } else {
          console.log("removed: " +  $(this).val())
    }
});


var languages_I_teach = [];
var also_speak = [];

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

  // db.ref("Users/Students/WB4ZK1wiK3RGwhvd1hQ67gvENEz1").on("value", read);
  //db.ref("Users/Students/WB4ZK1wiK3RGwhvd1hQ67gvENEz1/").update({'list':also_speak});
  window.location.replace("../main/main.html");

});

function read(data){
  console.log("enter got_data");
  var questions_obj = data.val();
  // var keys = Object.keys(questions_obj);
  // console.log("keys: " + keys);
    console.log("email: " + data.val().userEmail);

}
