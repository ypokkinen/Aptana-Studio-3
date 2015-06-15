
 
  
 
 


/*
$(document).ready(function(){
  //$("ul li:nth-child(3)").css("background-color","red");
  $(".Ekalista li:nth-child(3)").css("background-color","red");
});
*/
/*
$(document).ready(function(){
    $(".Ekalista li:nth-child(2)").css("background-color","red");
  });
});
*/
imgs=Array("kallio.jpg","bunkkerit_2.jpg","laituri.jpg","b_kuva_1.jpg");
var x=0;

function change() {
document.getElementById("kuvapaikka").src=imgs[++x];

if (x==3) {
x=0;
}
}


img src="kallio.jpg" id="kuvapaikka" alt="Kuvat" onmousedown="change()"

images[0] = "kallio.jpg"; 
images[1] = "bunkkerit_2.jpg";
images[2] = "laituri.jpg";
images[3] = "b_kuva_1.jpg";
setTimeout("changeImage()", 5000);



/*
function function_fade_in(opacity_value) {
    function_opacity(opacity_value);
    if (opacity_value == 1) {
        fading_div.style.display = 'block';
    }
    if (opacity_value == 100) {
        done = true;
    }
}

    fadeImg(img, 0, false);
    setTimeout("changeImage()", 5000);


function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 10);
    }
}


*/
//images[0] .fadeIn(20000);
//var x=0;
//$(document).ready(function(){
 // $("button").click(function(){
  //  var name = $(this).text();
 //   var x=Number(name);
//    console.log(x);
/*
   if(x==1){
   	$(".Ekalista li:nth-child(1)").css("background-color","red");
  	$(".paikka p").hide();
   	$(".paikka p").load("text" + x + ".txt");
   	$(".paikka p").fadeIn(2000);
   	$("#myframe").attr('src',"text1.txt");
    	
    	$("#kuvapaikka").hide();
    	$("#kuvapaikka").attr("src","bunkkerit_2.jpg");
    	$("#kuvapaikka").fadeIn(2000);
     	
     	    	

    }
    else if (x==2) {
   	$(".Ekalista li:nth-child(2)").css("background-color","red");
    	$(".paikka p").load("text2.txt");
   	$("#myframe").attr('src',"text2.txt");
       	$("#kuvapaikka").hide();
  	$("#kuvapaikka").attr("src","laituri.jpg");
   	$("#kuvapaikka").fadeIn(2000);
   } 
  else if(x==3){
   	$(".Ekalista li:nth-child(3)").css("background-color","red");
   	$(".paikka p").hide();
    	$(".paikka p").load("text3.txt");
   	$(".paikka p").fadeIn(2000);
    	$("#myframe").attr('src',"text3.txt");
    
    	$("#kuvapaikka").hide();
    	$("#kuvapaikka").attr("src","b_kuva_1.jpg");
    	$("#kuvapaikka").fadeIn(2000);
    }
    else
   {  
    $(".Ekalista li:nth-child(4)").css("background-color","red");
    $(".paikka p").load("text4.txt");
   $("#myframe").attr('src',"text4.txt");
    
    $("#kuvapaikka").hide();
    $("#kuvapaikka").attr("src","kallio.jpg");
   $("#kuvapaikka").fadeIn(2000);
    }
 
});

*/

