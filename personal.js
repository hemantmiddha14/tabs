$( document ).ready(function() {

    $("#fn").keydown(function(){
      $('#fn').css("border-style", "none");
      $("#name3").html(" ");
    });
    $("#mn").keydown(function(){
      $('#mn').css("border-style", "none");
      $("#name4").html(" ");
    });
    $("#hadd").keydown(function(){
      $('#hadd').css("border-style", "none");
      $("#ha").html(" ");
    });
    $("#ct").keydown(function(){
      $('#ct').css("border-style", "none");
      $("#city").html(" ");
    });
    $("#st").keydown(function(){
      $('#st').css("border-style", "none");
      $("#state").html(" ");
    });
    $("#fn").blur(function(){
      var fn = $("#fn").val();
      if(fn==""){
        $('#fn').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#name3").text("*This Field is required.").css("color", "red");
      }
      });
    $("#mn").blur(function(){
      var mn = $("#mn").val();
      if(mn==""){
        $('#mn').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#name4").text("*This Field is required.").css("color", "red");
      }
      });
    $("#hadd").blur(function(){
        var hadd = $("#hadd").val();
        if(hadd==""){
          $('#hadd').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
          $("#ha").text("*This Field is required.").css("color", "red");
          }
        });
    $("#ct").blur(function(){
      var ct = $("#ct").val();
      if(ct==""){
        $('#ct').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#city").text("*This Field is required.").css("color", "red");
        }
      });
    $("#st").blur(function(){
      var st = $("#st").val();
      if(st==""){
        $('#st').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#state").text("*This Field is required.").css("color", "red");
      }
  });
});

// function Validate(){
//   var fname = $("#fname").val();
//   var lname = $("#lname").val();
//   var email = $("#email").val();
//   var pwd = $("#pwd").val();
//   var pwdrep = $("#pwdrep").val();
//     if(fname==""){
//       $('#id_fname').css("color", "red");
//       $("#name1").text("This Field is required").css("color", "red");
//     }
//     if(lname==""){
//       $('#id_lname').css("color", "red");
//       $("#name2").text("This Field is required").css("color", "red");
//     }
//     if(email==""){
//       $('#id_mail').css("color", "red");
//       $("#mail").text("This Field is required").css("color", "red");
//     }
//     if(pwd==""){
//       $('#id_psw1').css("color", "red");
//       $("#psw1").text("This Field is required").css("color", "red");
//     }
//     if(pwdrep==pwd){
//       $('#id_psw2').css("color", "red");
//       $("#psw2").text("Passwords do not match").css("color", "red");
//     }
// }
