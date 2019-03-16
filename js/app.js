
//import Fetch, { fetchUrl } from 'fetch';
 var userna = "Loading..";
  //document.getElementById("userName").innerHTML = userna;
 var username = document.getElementById("login-username");
 var password = document.getElementById("login-password");


 //function getUserName(){
   $.getJSON("https://stacknet-api.herokuapp.com/api/sps", function (data){
    userna = data[1].name;
    console.log(userna);
    document.getElementById("userName").innerHTML = userna;
    //return userna;
   });
 //}

//function getRequests(){
  $.getJSON("https://stacknet-api.herokuapp.com/api/requests", function (data){
    //console.log(data);
    for (let index = 0;  8 < index < data.length; index++) {
      var tpaname = data[index].tpaname;
      var type = data[index].type;
      var status  = data[index].status;
      console.log(data[index].tpaname)
      var tpa=  "tpaname" + index
      document.getElementById(tpa).innerHTML = tpaname;


    
    }
  })
//}
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