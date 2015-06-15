$(document).ready(function(){
  $("p").click(function(){
    $(this).fadeOut(2000);
    //$(this).hide();
  });
});


/*
$(document).ready(function(){
  //$("ul li:nth-child(3)").css("background-color","red");
  $(".Ekalista li:nth-child(3)").css("background-color","red");
});
*/
/*
$(document).ready(function(){
  $("button").click(function(){
    $(".Ekalista li:nth-child(2)").css("background-color","red");
  });
});
*/
var images = new Array()
images[0] = "b_kuva_1.jpg";
images[1] = "bunkkerit_2.jpg";
images[2] = "kallio.jpg";
images[3] = "laituri.jpg";
setTimeout("changeImage()", 2000);
var x=0;

function changeImage()
{
document.getElementById("img").src=images[x];
x++;
};
<img id="img" src="b_kuva_1.jpg">