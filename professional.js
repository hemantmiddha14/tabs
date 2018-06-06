$( document ).ready(function() {

    $("#cname").keydown(function(){
      $('#cname').css("border-style", "none");
      $("#name5").html(" ");
    });
    $("#dname").keydown(function(){
      $('#dname').css("border-style", "none");
      $("#name6").html(" ");
    });
    $("#cadd").keydown(function(){
      $('#cadd').css("border-style", "none");
      $("#ca").html(" ");
    });
    $("#mob").keydown(function(){
      $('#mob').css("border-style", "none");
      $("#mno").html(" ");
    });

    $("#cname").blur(function(){
      var cname = $("#cname").val();
      if(cname==""){
        $('#cname').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#name5").text("*This Field is required.").css("color", "red");
      }
      });
    $("#dname").blur(function(){
      var dname = $("#dname").val();
      if(dname==""){
        $('#dname').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#name6").text("*This Field is required.").css("color", "red");
      }
      });
    $("#cadd").blur(function(){
        var cadd = $("#cadd").val();
        if(cadd==""){
          $('#cadd').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
          $("#ca").text("*This Field is required.").css("color", "red");
          }
        });
    $("#mob").blur(function(){
      var mob = $("#mob").val();
      if(mob==""){
        $('#mob').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#mno").text("*This Field is required.").css("color", "red");
        }
        if(isNaN(mob)){
        $('#mob').css({"border-style": "solid", "border-color": "red", "border-width": "1px"});
        $("#mno").text("*Please Enter a valid mobile number").css("color", "red");
      }
      
      });
  });
