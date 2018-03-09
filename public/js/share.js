'use strict';
//var socket = io.connect('http://localhost:3000');
var socket = io.connect('https://a9-team2.herokuapp.com/');


$(document).ready(function() {


  $('#link-send').click(function(){
    var email = $("#email").val();

    if (email == undefined || email == "undefined" || email == "")
    {
      $('.save-popup').html('<img id="check-icon" src="/images/icons/x-mark.png" alt=""> Enter email');
    }
    else
    {
      //var email = $("#email").val();
      var link = $("#link").val();
      socket.emit('email', email, link);

      console.log('send');
      $('.save-popup').html('<img id="check-icon" src="/images/icons/check-500.png" alt=""> Sent Link');
    }
    $('.save-popup').fadeIn(500);
    $('.save-popup').fadeOut(2000);
  })

  $('#link-copy').click(function(){
    $('.save-popup').html('<img id="check-icon" src="/images/icons/check-500.png" alt=""> Copied Link');
    $('.save-popup').fadeIn(500);
    $('.save-popup').fadeOut(2000);
  })

});
