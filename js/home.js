//import Axios from "axios";
"use strict";
$(function(){
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
    $('.myCarouselAndForm').show(1200);
    $('#myNavBar').show(1200);
    $('#aboutUs').slideDown(1200);
    $('#getStartForm').click(function(){
    $('.myCarousel').fadeOut(1200);
    $('.myFormBehindCarousel').slideDown(1000);    
    });
    
    
    $(window).on("scroll",function(){
        if($(window).scrollTop()>=300)
        {
            $('.myIcons').show(1200);
            $('#goUPButton').slideDown(1200);
        }
        else
        {
           $('.myIcons').hide(1200);
            $('#goUPButton').slideUp(1200); 
        }
    }) ;
        $('#btnShowMore').click(function(){
            $('#btnShowMore').hide(1000);
            $('#myHidenAbout').show(1000);
            $('#myPara').css({textAlign:"left"})
        });
        $('#btnHideMe').click(function(){
            $('#btnShowMore').show(1000);
            $('#myHidenAbout').hide(1000);
            $('#myPara').css({textAlign:"center"});
        });
    $('#noAccount').click(function(){
       $('.myFormBehindCarousel').fadeOut(1200);
        $('.myRegisterForm').slideDown(1200);
    });
    $('#signInNow').click(function(){
        $('.myRegisterForm').fadeOut(1200);
        $('.myFormBehindCarousel').slideDown(1200);
    });

    $('#btn-signUp').click(function(){
        $('.myRegisterForm').fadeOut(1200);
        $('.myCarousel').slideDown(1200);
    });
    $('.contactWhatsH').mouseenter(function(){
        $('.whatsappConactH').slideDown("slow");
    });
        $('.contactWhatsH').mouseleave(function(){
        $('.whatsappConactH').fadeOut("slow");
    });
    $('.contactWhatsA').mouseenter(function(){
        $('.whatsappConactA').slideDown("slow");
    });
        $('.contactWhatsA').mouseleave(function(){
        $('.whatsappConactA').fadeOut("slow");
    });
    $('.contactWhatsAh').mouseenter(function(){
        $('.whatsappConactAh').slideDown("slow");
    });
        $('.contactWhatsAh').mouseleave(function(){
        $('.whatsappConactAh').fadeOut("slow");
    });
    $('.contactWhatsM').mouseenter(function(){
        $('.whatsappConactM').slideDown("slow");
    });
        $('.contactWhatsM').mouseleave(function(){
        $('.whatsappConactM').fadeOut("slow");
    });
});
function goUP(){
    window.scrollTo(0,0); 
};

function loadget() {
    var name = "isLogged";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        document.getElementById("getStartForm").innerHTML = "";
        if (true){}
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

/*function logIn(){
    alert("logging in");
    var user = document.getElementById("login-username").value;
    var pass = document.getElementById("login-password").value;
    Axios.get("https://stacknet-api.herokuapp.com/api/sps").then(data => {
        console.log(data);
    }).catch(e => {
        console.log("error Occured");
    });
}*/

$(function(){

})

function LogIn(){
    alert("Log in began");
    $.getJSON("https://stacknet-api.herokuapp.com/api/sps",function l (data){
        console.log(data);
        var user = document.getElementById("login-username").value;
        var pass = document.getElementById("login-password").value;
        console.log(data[0].username + " " + data[0].username);
        for (let index = 0; index < data.length; index++) {
            if (data[index].username == user && data[index].password== pass) {
                var a = data[index];
                var b = data[index];
                console.log("Succsseful");
                location.replace("https://stacknet-dashboard.herokuapp.com");
                document.cookie = "isLogged=true";
                document.cookie = "id=" + data[a].id;
            } else {
                alert ("Log In failed");
                
            }
        }

    })
}
function register() {
    $.post("https://stacknet-api.herokuapp.com/api/sps", {
        "username":user,
        "password":pass,
        "contractors": [],
        "balance": "0",
        "name":name
    }, function () {
        // This is the call back ya abdelrahim aref 
    });
}