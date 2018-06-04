$(document).ready(function(){
    $("#pause").hide();
    $("#aboutContent, #storeContent, #leaderboardContent, #backbtn1, #backbtn2, #backbtn3, #section2").hide();

    $("#start").click(function(){
         $("#centerText").fadeOut(1000);
         $("#container").fadeOut(1000);
          $("#score, #highscore").animate({
              opacity: '0.5'
          });
        $("#score, #highscore").animate({
              opacity: '1'
          });
         $("#start").prop('disabled',true);
        $("#pause").fadeIn(1000);
    
    });
    $("#pause").click(function(){
       $("#centerText").show();
       $("#gameover").fadeIn(1000);
       $("#all").fadeIn(1000);
        $("#start").prop('disabled',false);
        $("#pause").hide();
    });

     $("#store").click(function(){
        $("#start, #store, #leaderboard, #about").hide();
        $("#storeContent, #backbtn2").fadeIn(1000);
        $("#leftbtn").css("color", "transparent");
         
    });    
    
     $("#backbtn2").click(function(){
        $("#storeContent, #backbtn2").hide();
        $("#start, #store, #leaderboard, #about").fadeIn(1000);
    })
     
       $("#about").click(function(){
        $("#start, #store, #leaderboard, #about").hide();
        $("#aboutContent, #backbtn1").fadeIn(1000);
    });
    
    $("#backbtn1").click(function(){
        $("#aboutContent, #backbtn1").hide();
        $("#start, #store, #leaderboard, #about").fadeIn(1000);
    });
    
     $("#leaderboard").click(function(){
        $("#start, #store, #leaderboard, #about").hide();
        $("#leaderboardContent, #backbtn3").fadeIn(1000);
    });
    
    $("#backbtn3").click(function(){
        $("#leaderboardContent, #backbtn3").hide();
        $("#start, #store, #leaderboard, #about").fadeIn(1000);
    });
    
    $("#gameover").hide();
	var z =0;
    cloud3();
   
            
setInterval(function(){

	if (z==0){
		cloud1();
	}
	else if (z==1){
		cloud2();
	}
	else{
		cloud3();
		z=-1;
	}
	
	z++;
   
},5000);
  

    
function cloud1(){
	var div = document.createElement("div");
	div.setAttribute("class","cloud1");

	
		
           $('.cloud1').removeAttr('style');
		$(".cloud1").velocity({
    left: -100+"vw",
}, {
    duration: 14000, 
    easing: "linear",
    
});  
	
	document.getElementById("clouds").appendChild(div);
}
    function cloud2(){
	var div = document.createElement("div");
	div.setAttribute("class","cloud2");

           $('.cloud2').removeAttr('style');
		$(".cloud2").velocity({
    left: -100+"vw",
}, {
    duration: 14000, 
    easing: "linear",
    
});  
		

	document.getElementById("clouds").appendChild(div);
}
    function cloud3(){
	var div = document.createElement("div");
	div.setAttribute("class","cloud3");
	
		
    $('.cloud3').removeAttr('style');
	$(".cloud3").velocity({
    left: -100+"vw",
}, {
    duration: 14000, 
    easing: "linear",
    
});  

	document.getElementById("clouds").appendChild(div);
}
    
    
    $("#playagain").click(function(){
         $("#start").prop('disabled',false);
        $("#start").click();
        $("#centerText, #container, #gameover, #all").fadeOut(1000);
        
          $("#score, #highscore").velocity({
              opacity: '0.5'
          });
        $("#score, #highscore").velocity({
              opacity: '1'
          });
         $("#start").prop('disabled',true);
        $("#pause").fadeIn(1000);
    });
    
    $("#home").click(function(){
        $("#container, #gameover, #all").fadeOut(1000);
        $("#container").fadeIn(1000);
    });
    
      $('[data-toggle="popover1"]').popover({
          trigger:"hover"
      }); 
    $('[data-toggle="popover2"]').popover({
          trigger:"hover",
          content:"Unlock after 1000 in highscore"

      });   
   
    $('[data-toggle="popover3"]').popover({
          trigger:"hover"
      });   
    $('[data-toggle="popover4"]').popover({
          trigger:"hover"
      }); 
    $('[data-toggle="popover5"]').popover({
          trigger:"hover"
      }); 
    $('[data-toggle="popover6"]').popover({
          trigger:"hover"
      }); 
    
    
    $("#warning").click(function(){
        $("#warning").fadeOut(1000);
        Command: toastr["warning"]("Seriously, please play at fullscreen.")

    });
    toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": true,
  "progressBar": false,
  "positionClass": "toast-top-left",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
});