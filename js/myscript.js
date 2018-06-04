$(document).ready(function(){
    function Box (pos){
        this.pos = pos;
    }
    function Duck (jump,score, highscore, game, jumph,duck,speed){
        this.jump = jump;
		this.score = score;
		this.highscore = highscore;
		this.game = game;
		this.jumph = jumph;
		this.duck = duck;
		this.speed = speed;
    }
	var z=0;
	var x=0;
    var duck = new Duck(0,0,0,0,0,0,3000);
$("#all, #penguin, #monkey").hide();


document.body.onkeyup = function(e){
    
	if (e.keyCode == 40){ //Down
	$("#duck").css("background", "url(images/DUCK.gif)");
        $("#penguin").css("background", "url(images/penguin.gif)");
        $("#monkey").css("background", "url(images/monkey.gif)");
        $("#duck, #penguin").css("background-size", "12vmin 15vmin");
        $("#monkey").css("background-size", "15vmin 15vmin");
		duck.duck=0;
	}
  
}

document.body.onkeydown = function(e){
    if(e.keyCode == 32 || e.keyCode == 38){ // Space or up
     
		if(duck.jump==0){
          $("#duck").css("background", "url(images/jump.gif)");
          $("#penguin").css("background", "url(images/penguin.png)");
          $("#monkey").css("background", "url(images/monkey.png)");
          $("#duck, #penguin").css("background-size", "12vmin 15vmin");
          $("#monkey").css("background-size", "15vmin 15vmin");
       var interval = setInterval(function() {
	duck.jumph = 30 - ((-0.02 * duck.jump)* (duck.jump - 43.8));
    //FIX THIS
    duck.jump++;
    $('#duck, #penguin, #monkey').css('top', duck.jumph + 'vmin' );
    
    if(duck.jump >= 50) {
		clearInterval(interval);
		duck.jump=0;
    $("#duck").css("background", "url(images/DUCK.gif)");
        $("#penguin").css("background", "url(images/penguin.gif)");
         $("#monkey").css("background", "url(images/monkey.gif)");
         $("#duck, #penguin").css("background-size", "12vmin 15vmin");
         $("#monkey").css("background-size", "15vmin 15vmin");
    }
           
}, 20);}
    }
     if (e.keyCode == 40){ //down
     $("#duck").css("background", "url(images/duck1.gif)");
     $("#penguin").css("background", "url(images/penguinduck.gif)");
     $("#monkey").css("background", "url(images/monkeyduck.gif)");
     $("#duck, #penguin").css("background-size", "12vmin 15vmin");
     $("#monkey").css("background-size", "15vmin 15vmin");
		 duck.duck=1;
    } 
    if (e.keyCode == 27){
        $("#pause").click();
    }
}

document.getElementById("highscore").innerHTML = "Highscore: " + duck.highscore; 
 
   grass4();
    function doGrass(){
 
	if (z==0){
		grass();
	}
	else if (z==1){
		grass2();
	}
    else if (z==2){
		grass3();
	}
	else{
		grass4();
		z=-1;
	}
	
	z++;
   return doGrass;
};
    var Grassy = setInterval(doGrass(), 4800);


  
 function grass (){
	var div = document.createElement("div");
	div.setAttribute('class', 'grass');
	
		$(".grass").velocity({left:-100+"vw"}, {
    duration: 9000, 
    easing: "linear",
    
}); 
		
	
	
	document.getElementById("test").appendChild(div);
}   
        
 function grass2 (){
	var div = document.createElement("div");
	div.setAttribute('class', 'grass2');
	
		$(".grass2").velocity({left:-100+"vw"}, {
    duration: 9000, 
    easing: "linear",
    
}); 
		

	document.getElementById("test").appendChild(div);
}   
    
 function grass3 (){
	var div = document.createElement("div");
	div.setAttribute('class', 'grass3');

		$(".grass3").velocity({left:-100+"vw"}, {
    duration: 9000, 
    easing: "linear",
    
}); 
		
	
	
	document.getElementById("test").appendChild(div);
}   
   function grass4 (){
	var div = document.createElement("div");
	div.setAttribute('class', 'grass4');

		$(".grass4").velocity({left:-100+"vw"}, {
    duration: 9000, 
    easing: "linear",
    
}); 
		
	
	
	document.getElementById("test").appendChild(div);
}   
$("#start").click(function(){
if (this.id == 'start'){
	
 var pause1 = setInterval(function(){
	duck.score++;
	 
	document.getElementById("score").innerHTML = "Score: " + duck.score;
     
     // If score animate
      if (duck.score == 100 || duck.score == 500 || duck.score == 1000 || duck.score == 1500) {
            $("#score").animate({
        fontSize: '3vw'
    });
    $("#score").animate({
        fontSize: '2.3vw'
    });
}
     
      if(duck.score % 100 === 0) {
        //$('body').css("background", "url(images/backgrounsd-upsidedown.png)");
       //  $('body').css("background-size", "100vw 100vh");
		  clearInterval(pause2);
		  clearInterval(pause1);
		  if(duck.speed>=1700){
		  duck.speed=duck.speed-600;
		  }
		  $("#start").click();
		 
    }
    document.getElementById("gameoverscore").innerHTML = "Game Over" + "<br>" + "Your Score: " + duck.score; 
	if (duck.score>duck.highscore){
		duck.highscore = duck.score;
		document.getElementById("highscore").innerHTML = "Highscore: " + duck.highscore;
        document.getElementById("score").innerHTML = duck.highscore ;
	}
	$("#pause").click(function(){
	clearInterval(pause1);
	
				  });
	},100);  
	
var pause2 = setInterval(function(){
	 if(x==0){
		crate();
		x=1;
	}
	else if(x==1) {
		tree();
		x=2;
	}
	else if (x==2){
		bird();
		x=3;
	}
	else if (x==3){
		crate2();
		x=0;
	}
	
	document.getElementById("test2").innerHTML=x;
	$("#pause").click(function(){
	clearInterval(pause2);
	
				  });
},duck.speed);
    
   
function crate (){
	var div = document.createElement("div");
	div.setAttribute('class', 'crate');
	var pos = 200;
	var interval = setInterval(function(){
		pos--;
		$(".crate").css("left",pos+"vmin");
		if(pos==-15){
			clearInterval(interval);
		} else if(pos<=26 && pos>=11){
			if(duck.jump==0){
				gameover();
			}
			else if(duck.jumph>=25){
				gameover();
				}
		}
	$("#pause").click(function(){
	clearInterval(interval);
	$(".crate").remove();
				  });	
	},20);
	document.getElementById("test").appendChild(div);
}
function crate2 (){
	var div = document.createElement("div");
	div.setAttribute('class', 'crate2');
	var pos = 200;
	var interval = setInterval(function(){
		pos--;
        
		$(".crate2").css("left",pos+"vmin");
		if(pos==-15){
			clearInterval(interval);
		} else if(pos<=26 && pos>=11){
			if(duck.jump==0){
				gameover();
			}
			else if(duck.jumph>=25){
				gameover();
				}
		}
	$("#pause").click(function(){
	clearInterval(interval);
		$(".crate2").remove();
				  });	
	
	
	},20);
	document.getElementById("test").appendChild(div);
}
function tree(){
	var div = document.createElement("div");
	div.setAttribute("class","tree");
	var pos =200;
	var interval = setInterval(function(){
		pos--;
		$(".tree").css("left",pos+"vmin")
		if(pos==-15){
			clearInterval(interval);
		} else if(pos<=26 && pos>=11){
			if(duck.jump==0){
				gameover();
			}
			else if(duck.jumph>=25){
				gameover();
				}
			
		}
	$("#pause").click(function(){
	clearInterval(interval);
		$(".tree").remove();
				  });	
	},20);
	document.getElementById("test").appendChild(div);
}
function bird(){
	var div = document.createElement("div");
	div.setAttribute("class","bird");
	var pos =200;
	var interval = setInterval(function(){
		pos--;
		$(".bird").css("left",pos+"vmin")
		if(pos==-15){
			clearInterval(interval);
		} else if(pos<=26 && pos>=17){
			if(duck.duck==0 || duck.jump>=1){
				gameover();
			}			
		}
	$("#pause").click(function(){
	clearInterval(interval);
	$(".bird").remove();
				  });	
	},20);
	document.getElementById("test").appendChild(div);
}

function gameover(){
	$("#all").fadeIn(1000);
	
	$("#pause").click();
	var pauseinterval = setInterval(function(){
		 clearInterval(pause2);
		  clearInterval(pause1);
		},100);
		duck.score=0;
		duck.speed=3000;
		$("#container").hide();
		$("#gameover").fadeIn(1000);
		$("#duck").css("background", "url(images/dieanimation.gif)");
		$("#penguin").css("background", "url(images/penguin.png)");
		$("#monkey").css("background", "url(images/monkey.png)");
		$("#duck, #penguin").css("background-size", "12vmin 15vmin");
		$("#monkey").css("background-size", "15vmin 15vmin");
		setTimeout(function(){ 
		$("#duck").css("background", "url(images/dead.png)");
		$("#penguin").css("background", "url(images/penguin.png)");
		$("#monkey").css("background", "url(images/monkey.png)");
		$("#duck, #penguin").css("background-size", "12vmin 15vmin");
		$("#monkey").css("background-size", "15vmin 15vmin");
		}, 3000);

	
	 
};
    
    
}    
});

 
    $("#penguinStore").click(function(){
        $("#duck, #monkey").hide();
        $("#penguin").show();
         
    });
     $("#duckStore").click(function(){
        $("#duck").show();
        $("#penguin, #monkey").hide();
    });
    $("#monkeyStore").click(function(){
        $("#monkey").show();
         $("#duck, #penguin").hide();
    });
    
});