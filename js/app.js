 //import Fetch, { fetchUrl } from 'fetch';
 
 document.getElementById("userName").innerHTML = getUserName();
 var username = document.getElementById("login-username");
 var password = document.getElementById("login-password");


 function getUserName(){
   $.getJSON("https://stacknet-api.herokuapp.com/api/sps", function (data){
    var userna = data[0].name;
    return userna
   });
 }

function getRequests(){
  $.getJSON("https://stacknet-api.herokuapp.com/api/requests", function (data){
    for (let index = 0; index < data.length; index++) {
      var tpaname = data[i].tpaname;
      var type = data[i].type;
      var status  = data[i].status;
    }
  })
}
function newRequest(){
  $.post("https://stacknet-api.herokuapp.com/api/requests", {
    "tpaname":tpaname,
    "spname": spaname,
    "status": status,
    "notes": nootes,
    "type": type
  }, function a (){
    //This is call back ya abdelrehim aref
    alert("Succsessful Request")
  })
}

function getCompanies(){
  $.getJSON("https://stacknet-api.herokuapp.com/api/sps", function (data){
    for (let index = 0; index < data[0].contractors.length; index++) {
      var tpaname = data[0].contractors[i];
      
    }
  })
}