$(document).ready(function(){

//what-we-do toggle effect
    $("#design").click(function() {
        $("#design p").toggle('1500');
        $("#design img").toggle('1000');
      });
      
      $("#development").click(function() {
        $("#development p").toggle('1500');
        $("#development img").toggle('1000');
        
      });
      
      $("#product").click(function() {
        $("#product p").toggle('1500');
        $("#product img").toggle('1000');
      });
  //portfolio hover-effect
      $("#work1").mouseover(function(){
        $("#w1").show();
      }).mouseout(function(){
        $("#w1").hide();
      });

      $("#work2").mouseover(function(){
        $("#w2").show();
      }).mouseout(function(){
        $("#w2").hide();
      });
    
      $("#work3").mouseover(function(){
        $("#w3").show();
      }).mouseout(function(){
        $("#w3").hide();
      });
        
      $("#work4").mouseover(function(){
        $("#w4").show();
      }).mouseout(function(){
        $("#w4").hide();
      });
      
      $("#work5").mouseover(function(){
        $("#w5").show();
      }).mouseout(function(){
        $("#w5").hide(); 
      });
        
      $("#work6").mouseover(function(){
      $("#w6").show();
      }).mouseout(function(){
       $("#w6").hide();
      });
      
      $("#work7").mouseover(function(){
        $("#w7").show();
      }).mouseout(function(){
        $("#w7").hide();
    
      });$("#work8").mouseover(function(){
        $("#w8").show();
      }).mouseout(function(){
        $("#w8").hide();
      });
     
      $("form#contUs").submit(function(event){
        var name = $("input#name").val();
        var email = $("input#mail").val();
        var message = $("textarea#tt").val();
        if ($("input#name").val() && $("input#mail").val()){
          alert (name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
          alert("Please enter your name and email!");
        }
        
      });





      
});