$(document).ready(function(){
  var valittu=1;
  var x=1;
  
  $('#pageMenu ul li.mainitem').bind('click mouseover mouseout',function(event){
    if (event.type=='click') {
  	valittu=0;
  	var mItem=$(this).text();
  	
  	//console.log("mouseclick");
  	if(mItem==='Etusivu') {
       valittu=1;
        $("#kuvapaikka").css("z-index","1");
        $("#information").css("z-index","0");
        
       //$("#information p").hide();
        $("#explanation").load("johtokunta.txt");
    	$("#information p").load("text1.txt");
    	//$("#information p").fadeIn(2000);
    	$("#supportText").load("text1_s.txt");
        }
    else if(mItem==='Jäsenedut')
        {
        valittu=2;
        $("#information").css("z-index","1");
    	//$("#information p").hide();
    	$("#information p").load("text2.txt");
    	//$("#information p").fadeIn(2000);
    	//$("#information p").text();
    	$("#supportText").load("text2_s.txt");
   }
   else if(mItem==='Säännöt') {
       valittu=3;
       $("#information").css("z-index","1");
    	//$("#information p").hide();
    	$("#information p").load("text3.txt");
    	//$("#information p").attr('src',"text3.txt");
    	//$("#information p").fadeIn(2000);
    	//$("#information p").text();
   }
   else if(mItem==='Historiikki') {
        valittu=4;
        $("#information").css("z-index","1");
        //$("#information p").hide();
    	$("#information p").load("text4.txt");
    	//$("#information p").fadeIn(2000);
   }
   else {
        valittu=5;
        $("#information").css("z-index","1");
        //$("#information p").hide();
    	$("#information p").load("text5.txt");
    	//$("#information p").fadeIn(2000);
    	//$("#information p").text();
   }
   for(i=1;i<6;i++){
    	console.log("in for loop");
    	$("#pageMenu li:nth-child("+i+")").css("background-color","green");
        }
    $("#pageMenu li:nth-child("+valittu+")").css("background-color","red");
    }
    
    // mouseover function
    else if (event.type=='mouseover')
    {
    var mItem=$(this).text();
  	
  	console.log("mouseover");
  	if(mItem==='Etusivu') {
    x=1;
    }
    else if(mItem==='Jäsenedut') {
    x=2;
   }
   else if(mItem==='Säännöt') {
    x=3;
   }
   else if(mItem==='Historiikki') {
    x=4;
   }
   else {
    x=5;
   }
   
    $("#pageMenu li:nth-child("+x+")").css("background-color","red");	
    }
   
   // mouseout function
    else {
    console.log("mouseout");
  	console.log(x);
  		
    $("#pageMenu li:nth-child("+x+")").css("background-color","green");	
    $("#pageMenu li:nth-child("+valittu+")").css("background-color","red");
    }     
    
    //$("div").html("Event: " + event.type);
  });
});

/*
$(document).ready(function(){
  $('#pageMenu ul li.mainitem').mouseover(function(){
  	var mItem=$(this).text();
  	var x=0;
  	if(mItem==='Eka')
  	{
    x=1;
    }
    else if(mItem==='Toka')
    {
    x=2;
   }
   else if(mItem==='Kolmas')
    {
    x=3;
   }
   else if(mItem==='Neljäs')
    {
    x=4;
   }
   else 
    {
    x=5;
   }
    //$('#pageMenu ul li.mainitem').css("background-color","red");
    $("#pageMenu li:nth-child("+x+")").css("background-color","red");
   
  });
  
  $('#pageMenu ul li.mainitem').mouseout(function(){
  	var mItem=$(this).text();
  	var x=0;
  	if(mItem==='Eka')
  	{
    x=1;
    }
    else if(mItem==='Toka')
    {
    x=2;
   }
   else if(mItem==='Kolmas')
    {
    x=3;
   }
   else if(mItem==='Neljäs'){
    x=4;
   }
   else {
    x=5;
   }
    $("#pageMenu li:nth-child("+x+")").css("background-color","green");
  });
  
});
*/

/*
$(document).ready(function(){
	console.log(1);
  $('#pageMenu ul li.mainitem').click(function(){
    console.log(2);
    var valinta = $(this).text();
    var x=0;
    console.log(valinta);
    console.log(x);
    
    if(valinta==='Eka'){
    	console.log("Inside if");
    	x=1;
    	console.log(x);
    	$("#pageMenu li:nth-child("+x+")").css("background-color","red");
    	$("#information p").hide();
    	$("#information p").load("text1.txt");
    	$("#information p").fadeIn(2000);
        $('#pageMenu ul li.mainitem').mouseout(function(){
  		  $("#pageMenu li:nth-child("+x+")").css("background-color","red");
 		 });	
        }
    else if (valinta==='Toka') {
    	$("#pageMenu li:nth-child(1)").css("background-color","green");
    	$("#pageMenu li:nth-child(2)").css("background-color","red");
    	//$("#information p").hide();
    	$("#information p").load("text2.txt");
    	//$("#information p").fadeIn(2000);
    	$("#information p").text();
    	    	
        } 
    else if(valinta==='Kolmas'){
    	$("#pageMenu li:nth-child(3)").css("background-color","red");
    	//$("#information p").hide();
    	$("#information p").load("text3.txt");
    	//$("#information p").fadeIn(2000);
    	$("#information p").text();
    	
        }
    else if(valinta==='Neljäs'){  
	    $("#pageMenu li:nth-child(4)").css("background-color","red");
	    $("#information p").hide();
    	$("#information p").load("text4.txt");
    	$("#information p").fadeIn(2000);
	    }
   else {
 	  	$("#pageMenu li:nth-child(5)").css("background-color","red");
 	  	//$("#information p").hide();
    	$("#information p").load("text5.txt");
    	//$("#information p").fadeIn(2000);
    	$("#information p").text();
 	
        }
  });
});

*/
/*
$(document).ready(function(){
  $("p").click(function(){
    $(this).fadeOut(2000);
    //$(this).hide();
  });
});
*/

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


/*
$(document).ready(function(){ 
  $('input[type="button"]').click( function(event){ process_form_submission(event); } ); 
}); 
 
function process_form_submission( event ) { 
  event.preventDefault(); 
  //var target = $(event.target); 
  var input = $(event.currentTarget); 
  var which_button = event.currentTarget.value; 
  var data = input.parents("form")[0].data.value; 
//  var which_button = '?';       // <-- this is what I want to know 
  alert( 'data: ' + data + ', button: ' + which_button ); 
} 

*/


