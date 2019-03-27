$(document).ready(function(){
  $("button#yell").click(function(event){
    var userInput = $("input#user").val();
    $("#you-said").text(userInput);
    $("#page-yell").text(userInput.toUpperCase());
    event.preventDefault();
  });
});
