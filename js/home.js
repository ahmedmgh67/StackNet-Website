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
        if($(window).scrollTop()>=350)
        {
            $('#ourServices').slideDown(1200); 
        }
        if($(window).scrollTop()>=1100)
        {
            $('#ourBlogers').slideDown(1200);
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
    /*$('#btn-login').click(function(){
        //$('.myFormBehindCarousel').fadeOut(1200);
        //$('.myCarousel').fadeIn(1200);
        logIn();
    });*/
    $('#btn-signUp').click(function(){
        $('.myRegisterForm').fadeOut(1200);
        $('.myCarousel').slideDown(1200);
    });
});
function goUP(){
    window.scrollTo(0,0); 
};

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
function LogIn (){
    $.getJSON("https://stacknet-api.herokuapp.com/api/sps",function l (data){
        var user = document.getElementById("login-username").value;
        var pass = document.getElementById("login-password").value;
        console.log(data[0].username + " " + data[0].username);
        /*for (let index = 0; index < data.length; index++) {
            if (data[i].username == user && data[i].username) {
                window.location("dashboard.html");
            } else {
                alert (logInfailed);
            }
        }*/

    })
}
function register () {
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