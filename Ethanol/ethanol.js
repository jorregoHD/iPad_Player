// JavaScript Documen

function doFirst(){
	
	

		//var x=document.getElementById('canvas');
//		canvas = x.getContext('2d');
//		var healthButton = new Image();
//		healthButton.src="images/health.png";
//		healthButton.addEventListener('load',function(){canvas.drawImage(healthButton,500,15)},false);
//		
//		var environmentalButton = new Image();
//		environmentalButton.src="images/environmental.png";
//		environmentalButton.addEventListener('load',function(){canvas.drawImage(environmentalButton,600,15)},false);
		
		//video array with linked videos
		videoSource = new Array();
		videoSource[0]='../videos/vid1.mp4';
		videoSource[1]='../videos/vid2.mp4';
		videoSource[2]='../videos/vid3.mp4';
		
		videoCount = videoSource.length;
		
		myMovie.setAttribute('src',videoSource[0]);
		
		
		

		barSize=178;
		myMovie=document.getElementById('myMovie');	
		
		playButton=document.getElementById('ethanol');	
		bar=document.getElementById('defaultBar');	
		progressBar=document.getElementById('progressBar');	
		health=document.getElementById('health');
		playButton.addEventListener('click', playOrPause, false);
		bar.addEventListener('click', clickedBar, false);
		health.addEventListener('click',healthVid,false);
		environmental.addEventListener('click',enviroVid,false);
		economic.addEventListener('click',econoVid,false);
		security.addEventListener('click',healthVid,false);
		renewability.addEventListener('click',renewVid,false);
		
		
		
		function videoPlay(videoNum)
		{
			myMovie.setAttribute('src',videoSource[videoNum]);
			document.getElementById('myMovie').load();
			document.getElementById('myMovie').play();
		}
		/*document.getElementById('myMovie').addEventListener('ended',myHandler,false);
		function myHandler(){
			i++;
			if(i == (videoCount-1)){
				i=0;
				videoPlay(i);
			}
			else{
			videoPlay(i);	
			}*/
		

		
		
function enviroVid(){

		
		
		
		
			myMovie.setAttribute('src',videoSource[2]);
			//myMovie.load();
			myMovie.play();
			playButton.innerHTML='<img src="images/AltFuels_Icons/Ethanol_Icon_pause.png"  />';
			
			
		}		

}



	

//play button
function playOrPause(){
	
	
	
	
	//if the play button is not paused and the movie has not ended...
		if(!myMovie.paused && !myMovie.ended){
		myMovie.pause();//pause the movie
		//playButton.innerHTML='PLAY';//change the buttin text to PLAY
		playButton.innerHTML='<img src="images/AltFuels_Icons/Ethanol_Icon_play.png"  />';
		window.clearInterval(updateBar);//Stop updating the progress bar
	}else{
		myMovie.play();//play the movie
		//playButton.innerHTML='PAUSE';//change the button text to PAUSE (since the movie is playing)
		//document.getElementById("startButton").src="images/pause.png" ;
		playButton.innerHTML='<img src="images/AltFuels_Icons/Ethanol_Icon_pause.png"  />';
		updateBar= setInterval(update, 500);//every half a second, update the progress bar (Note the function named "update" set as the first interval 
	}
}
function update(){// this is the function "update" we passed as the setInterval argument
	if(!myMovie.ended){//if the movie has not ended
		var size=parseInt(myMovie.currentTime*barSize/myMovie.duration); 
		progressBar.style.width=size+'px';//this is how to reference css properties... this changes the "width" style to make the progress bar grow while the video plays. the + sign adds the 'px' that is needed to correctly format the size in pixels 
		}else{
			
		//myMovie.play();
			
			
			
			/*progressBar.stye.width='0px';
			//playButton.innerHTML='PLAY';
			playButton.innerHTML='<img src="images/AltFuels_Icons/Ethanol_Icon_play.png"  />';
			window.clearInterval(updateBar);*/
		}
}

function healthVid(){

		
		
		
		
			myMovie.setAttribute('src',videoSource[1]);
			
			myMovie.play();
			playButton.innerHTML='<img src="images/AltFuels_Icons/Ethanol_Icon_pause.png"  />';
			progressBar.stye.width='0px';
			window.clearInterval(updateBar);
			
		}
		

function clickedBar(e){
	if(!myMovie.paused && !myMovie.ended){
		var mouseX= e.pageX-bar.offsetLeft;//mouse postition when clicked in reference to the progress bar
		var newtime=mouseX*myMovie.duration/barSize;<!-- reset the movie starting location based on the mouse location-->
		myMovie.currentTime=newtime;//Start playing the movie from the reset location
		progressBar.style.width=mouseX+'px';
		
	}
}




window.addEventListener('load',doFirst,false);

