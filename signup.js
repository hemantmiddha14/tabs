$( document ).ready(function() {

    $("#fname").keydown(function(){
      $('#fname').css("border-style", "none");
      $("#name1").html(" ");
    });
    $("#lname").keydown(function(){
      $('#lname').css("border-style", "none");
      $("#name2").html(" ");
    });
    $("#email").keydown(function(){
      $('#email').css("border-style", "none");
      $("#mail").html(" ");
    });
    $("#pwd").keydown(function(){
      $('#pwd').css("border-style", "none");
      $("#psw1").html(" ");
    });
    $("#pwdrep").keydown(function(){
      $('#pwdrep').css("border-style", "none");
      $("#psw2").html(" ");
    });
    $("#fname").blur(function(){
      var fname = $("#fname").val();
      if(fname==""){
        $('#fname').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#name1").text("*This Field is required.").css("color", "red");
      }
      });
    $("#lname").blur(function(){
      var lname = $("#lname").val();
      if(lname==""){
        $('#lname').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#name2").text("*This Field is required.").css("color", "red");
      }
      });
    $("#email").blur(function(){
        var email = $("#email").val();
        if(email==""){
          $('#email').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
          $("#mail").text("*This Field is required.").css("color", "red");
          }
          else {
          if (email.indexOf('@')<=0){
            $('#email').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
            $("#mail").text("*Please enter a valid Email Address.").css("color", "red");
          }
          if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3) !='.')){
            $('#email').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
            $("#mail").text("*Please enter a valid Email Address.").css("color", "red");
          }
        }
        });
    $("#pwd").blur(function(){
      var pwd = $("#pwd").val();
      if(pwd==""){
        $('#pwd').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#psw1").text("*This Field is required.").css("color", "red");
        }
      });
    $("#pwdrep").blur(function(){
      var pwd = $("#pwd").val();
      var pwdrep = $("#pwdrep").val();
      if(pwdrep==""){
        $('#pwdrep').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#psw2").text("*This Field is required.").css("color", "red");
      }
        else if (pwdrep!==pwd){
        $('#pwd').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $('#pwdrep').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#psw2").text("*Passwords do not match").css("color", "red");
        }
        else {
         $("#psw2").html(" ");

        }
      });

      $( "#next1" ).on( "click", function() {
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var pwd = $("#pwd").val();
        var pwdrep = $("#pwdrep").val();
        var em = $("#email").val().length;
        if ((fname!="") && (lname!="") && (email!="") && (email.indexOf('@')>0) && (pwd!="") && (pwdrep!="") && (pwdrep==pwd) && ((email.charAt(em-4) == '.') || (email.charAt(em-3) == '.'))) {
           $("#tab2").trigger("click");
         }
         else {
          Validate();
         }
      });
      $( "#next2" ).on( "click", function() {
        var fn = $("#fn").val();
        var mn = $("#mn").val();
        var hadd = $("#hadd").val();
        var ct = $("#ct").val();
        var st = $("#st").val();
        if ((fn!="")&& (mn!="") && (hadd!="") && (ct!="") && (st!="")) {
           $("#tab3").trigger("click");
         }
         else {
           Validate2();
         }
      });
      $( "#back2" ).on( "click", function() {
           $("#tab2").trigger("click");
      });
      $( "#back1" ).on( "click", function() {
           $("#tab1").trigger("click");
      });
  });

function Validate(){
  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var email = $("#email").val();
  var pwd = $("#pwd").val();
  var pwdrep = $("#pwdrep").val();
    if(fname==""){
      $('#fname').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
      $("#name1").text("*This Field is required").css("color", "red");
    }
    if(lname==""){
      $('#lname').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
      $("#name2").text("*This Field is required").css("color", "red");
    }
    if(email==""){
      $('#email').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
      $("#mail").text("*This Field is required").css("color", "red");
    }else{
    if (email.indexOf('@')<=0){
      $('#email').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
      $("#mail").text("*Please enter a valid Email Address.").css("color", "red");
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3) !='.')){
      $('#email').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
      $("#mail").text("*Please enter a valid Email Address.").css("color", "red");
    }
  }
    if(pwd==""){
      $('#pwd').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
      $("#psw1").text("*This Field is required").css("color", "red");
    }
    if(pwdrep==""){
      $('#pwdrep').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
      $("#psw2").text("*This Field is required.").css("color", "red");
    }
    if(pwdrep!=pwd){
      $('#pwdrep').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
      $("#psw2").text("*Passwords do not match").css("color", "red");
    }

}

function Validate2(){

  var fn = $("#fn").val();
  var mn = $("#mn").val();
  var hadd = $("#hadd").val();
  var ct = $("#ct").val();
  var st = $("#st").val();
  if(fn==""){
    $('#fn').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
    $("#name3").text("*This Field is required.").css("color", "red");
  }
  if(mn==""){
    $('#mn').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
    $("#name4").text("*This Field is required.").css("color", "red");
  }
  if(hadd==""){
    $('#hadd').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
    $("#ha").text("*This Field is required.").css("color", "red");
    }
    if(ct==""){
      $('#ct').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
      $("#city").text("8This Field is required.").css("color", "red");
      }
    if(st==""){
        $('#st').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});;
        $("#state").text("*This Field is required.").css("color", "red");
    }
}
function Validate3(){

  var cname = $("#cname").val();
  var dname = $("#dname").val();
  var cadd = $("#cadd").val();
  var mob = $("#mob").val();
  if(cname==""){
    $('#cname').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
    $("#name5").text("*This Field is required.").css("color", "red");
  }
  if(dname==""){
    $('#dname').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
    $("#name6").text("*This Field is required.").css("color", "red");
  }
  if(cadd==""){
      $('#cadd').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
      $("#ca").text("*This Field is required.").css("color", "red");
      }
  if(mob==""){
    $('#mob').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
    $("#mno").text("*This Field is required.").css("color", "red");
    }
  if(isNaN(mob)){
    $('#mob').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
    $("#mno").text("*Please Enter a valid mobile number").css("color", "red");
    }
}
