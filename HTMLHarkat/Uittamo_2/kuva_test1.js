
$("#kuvapaikka").fadeOut('slow',function() { 
  $(this).load(function() { $(this).fadeIn('slow'); }); 
  $(this).attr("src", "bunkkerit_2.jpg"); 
}); 


function changeImage()
{
    var img = document.getElementById("kuvapaikka");
  	img.src = images[x];
      
    x++;
    if (x >= images.length) {
        x = 0;
        k++;
	  } 
    
    fadeImg(img, 0, false);
   
    if (k<3){
    setTimeout("changeImage()", 5000);
    }
}

function fadeImg(el, val, fade){
    if(fade === true){
        val--;
         }
    else {
        val ++;
         }

    if (val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 10);
      }
}


var x=0;
var k=1;
var images = new Array();

images[0] = "kallio.jpg"; 
images[1] = "bunkkerit_2.jpg";
images[2] = "laituri.jpg";
images[3] = "b_kuva_1.jpg";
 //var img = document.getElementById("information");
setTimeout("changeImage()", 5000);


