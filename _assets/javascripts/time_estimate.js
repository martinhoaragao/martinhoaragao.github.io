$(document).ready(function(){
  $(".time").text(function(a,b){
    return Math.round(parseFloat(b))
  })
});
