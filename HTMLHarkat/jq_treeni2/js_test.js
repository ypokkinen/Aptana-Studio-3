
 
function changeImage()
{
    var img = document.getElementById("kuvapaikka");
    img.src = images[x];
    x++;
    if(x >= images.length){
        x = 0;
    } 
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
}

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

var images = new Array();

images[0] = "kallio.jpg"; 
images[1] = "bunkkerit_2.jpg";
images[2] = "laituri.jpg";
images[3] = "b_kuva_1.jpg";
setTimeout("changeImage()", 5000);
var x=0;

