let counter = 1;
let counter2 = 1;
let counter3 = 1;
let counter4 = 0;
let oldback = 1;
let twoback = 0;
let xpback = 0;
let ranum = Math.floor(Math.random() * 11);
let sound = new Audio('sounds/click.mp3');
let sound2 = new Audio('sounds/xpstart.mp3');
let sound3 = new Audio('sounds/error.mp3');
let sound4 = new Audio('sounds/exit.mp3');
let sound5 = new Audio('sounds/95.mp3');
let sound6 = new Audio('sounds/2000.mp3');
let sound7 = new Audio('sounds/startup.mp3');
let sound8 = new Audio('sounds/NT.mp3');

function menu(){
		sound.play();
		if (counter === 3){
			document.getElementById('html').style.backgroundcolor = "#007B7B";
			sound7.play();
		}
		if (counter === 5){
			sound8.play();
		}
		if (counter === 10){
			document.getElementById('html').style.backgroundImage = "url(images/2000.png)";
			counter4 = 0;
			oldback = 0;
			twoback = 1;
			sound6.play();
		}
		if (counter === 15){
			document.getElementById('html').style.backgroundImage = "url(images/xp.jpg)";
			counter4 = 0;
			xpback = 1;
			twoback = 0;
			sound2.play();
		}
		counter++
		
		document.getElementById('deskicon').style.opacity = "0";
		document.getElementById('deskicon1').style.opacity = "0";
		document.getElementById('deskicon2').style.opacity = "0";
		document.getElementById('deskicon3').style.opacity = "0";
		document.body.style.borderStyle = "solid";
		
		document.getElementById('everything').style.display = "block";
		document.getElementById('button').style.backgroundColor = "#C0C0C0";
		document.getElementById('button').style.borderTopColor  = "#000000";
		document.getElementById('button').style.borderLefttColor  = "#000000";
		document.getElementById('button').style.borderRightColor  = "#DEDFDE";
		document.getElementById('button').style.borderBottomColor  = "#DEDFDE";
	  
		setTimeout(back, 200);
	  
		document.getElementById('hide').style.display = "block";
		document.getElementById('hide').style.backgroundColor = "#BDBEBD";
		document.getElementById('hide').style.borderWidths  = "thick";
		document.getElementById('hide').style.borderTopColor  = "#000000";
		document.getElementById('hide').style.borderLeftColor  = "#000000";
		document.getElementById('hide').style.borderRightColor  = "#FFFFFF";
		document.getElementById('hide').style.borderBottomColor  = "#FFFFFF";
}

function back(){
		document.getElementById('button').style.backgroundColor = "#BDBEBD";
		document.getElementById('button').style.borderWidths  = "thick";
		document.getElementById('button').style.borderTopColor  = "#FFFFFF";
		document.getElementById('button').style.borderLeftColor  = "#FFFFFF";
		document.getElementById('button').style.borderRightColor  = "#000000";
		document.getElementById('button').style.borderBottomColor  = "#000000";
	}

function hide(){
	counter2++;
	if (counter2 % 2 == 0) {
		sound.play();
		document.body.style.borderStyle = "none";
		document.getElementById('deskicon').style.opacity = "1";
		document.getElementById('deskicon1').style.opacity = "1";
		document.getElementById('deskicon2').style.opacity = "1";
		document.getElementById('deskicon3').style.opacity = "1";
		document.getElementById('everything').style.display = "none";
		document.getElementById('all').style.backgroundColor = "#007B7B";
		document.getElementById('hide').style.backgroundColor = "#C0C0C0";
		document.getElementById('hide').style.borderTopColor  = "#DEDEDE";
		document.getElementById('hide').style.borderLefttColor  = "#DEDEDE";
		document.getElementById('hide').style.borderRightColor  = "#7B7B7B";
		document.getElementById('hide').style.borderBottomColor  = "#7B7B7B ";
		
		
		
	} else {
		document.body.style.borderStyle = "solid";
		document.getElementById('deskicon').style.opacity = "0";
		document.getElementById('deskicon1').style.opacity = "0";
		document.getElementById('deskicon2').style.opacity = "0";
		document.getElementById('deskicon3').style.opacity = "0";
		document.getElementById('everything').style.display = "block";
	    document.getElementById('hide').style.backgroundColor = "#BDBEBD";
		document.getElementById('hide').style.borderWidths  = "thick";
		document.getElementById('hide').style.borderTopColor  = "#000000";
		document.getElementById('hide').style.borderLeftColor  = "#000000";
		document.getElementById('hide').style.borderRightColor  = "#FFFFFF";
		document.getElementById('hide').style.borderBottomColor  = "#FFFFFF";
	}
}

function closedoc(){
	sound.play();
	document.getElementById('everything').style.display = "none";
	document.getElementById('hide').style.display = "none";
	document.body.style.borderStyle = "none";
	document.getElementById('deskicon').style.opacity = "1";
	document.getElementById('deskicon1').style.opacity = "1";
		document.getElementById('deskicon2').style.opacity = "1";
		document.getElementById('deskicon3').style.opacity = "1";
	
	
}

function expand(){
	sound.play();
	counter3++;
	if (counter3 % 2 == 0) {
		document.getElementById('T1').style.fontSize = "xx-large";
	} else {
		document.getElementById('T1').style.fontSize = "20px";
	}
}

function min(){
	sound.play();
	counter2++;
	document.getElementById('everything').style.display = "none";
	document.getElementById('hide').style.backgroundColor = "#C0C0C0";
	  document.getElementById('hide').style.borderTopColor  = "#DEDEDE";
		document.getElementById('hide').style.borderLefttColor  = "#DEDEDE";
		document.getElementById('hide').style.borderRightColor  = "#7B7B7B";
		document.getElementById('hide').style.borderBottomColor  = "#7B7B7B ";
		document.body.style.borderStyle = "none";
		document.getElementById('deskicon').style.opacity = "1";
		document.getElementById('deskicon1').style.opacity = "1";
		document.getElementById('deskicon2').style.opacity = "1";
		document.getElementById('deskicon3').style.opacity = "1";
}

function ie(){
	sound3.play();
	}

function exit(){
	sound.play();
	if (oldback === 1){
		if (counter4 === 0){
			document.getElementById('html').style.backgroundImage = "url(95back/BlackThatch.bmp)";
			counter4++;
			} else if (counter4 === 1){
				document.getElementById('html').style.backgroundImage = "url(95back/Blocks.bmp)";
				counter4++;
			} else if (counter4 === 2){
				document.getElementById('html').style.backgroundImage = "url(95back/BlueRivets.bmp)";
				counter4++;
			} else if (counter4 === 3){
				document.getElementById('html').style.backgroundImage = "url(95back/Bubbles.bmp)";
				counter4++;
			} else if (counter4 === 4){
				document.getElementById('html').style.backgroundImage = "url(95back/Clouds.bmp)";
				counter4++;
			} else if (counter4 === 5){
				document.getElementById('html').style.backgroundImage = "url(95back/Forest.bmp)";
				counter4++;
			} else if (counter4 === 6){
				document.getElementById('html').style.backgroundImage = "url(95back/GoldWeave.bmp)";
				counter4++;
			} else if (counter4 === 7){
				document.getElementById('html').style.backgroundImage = "url(95back/Houndstooth.bmp)";
				counter4++;
			} else if (counter4 === 8){
				document.getElementById('html').style.backgroundImage = "url(95back/MetalLinks.bmp)";
				counter4++;
			} else if (counter4 === 9){
				document.getElementById('html').style.backgroundImage = "url(95back/Pinstripe.bmp)";
				counter4++;
			} else if (counter4 === 10){
				document.getElementById('html').style.backgroundImage = "url(95back/Sandstone.bmp)";
				counter4++;
			} else if (counter4 === 11){
				document.getElementById('html').style.backgroundImage = "url(95back/Setup.bmp)";
				counter4++;
			} else if (counter4 === 12){
				document.getElementById('html').style.backgroundImage = "url(95back/Stitches.bmp)";
				counter4++;
			} else if (counter4 === 13){
				document.getElementById('html').style.backgroundImage = "url(95back/StrawMat.bmp)";
				counter4++;
			} else if (counter4 === 14){
				document.getElementById('html').style.backgroundImage = "url(95back/Tiles.bmp)";
				counter4++;
			} else if (counter4 === 15){
				document.getElementById('html').style.backgroundImage = "url(95back/Triangles.bmp)";
				counter4++;
			} else if (counter4 === 16){
				document.getElementById('html').style.backgroundImage = "url(95back/Waves.bmp)";
				counter4++;
			} else {
				document.getElementById('html').style.backgroundImage = "url(95back/asfdfasd.bmp)";
				counter4 = 0;
			}
		}
	if (twoback === 1){
		if (counter4 === 0){
			document.getElementById('html').style.backgroundImage = "url(2000back/Boiling.jpg)";
			counter4++;
			} else if (counter4 === 1){
				document.getElementById('html').style.backgroundImage = "url(2000back/Gold.jpg)";
				counter4++;
			} else if (counter4 === 2){
				document.getElementById('html').style.backgroundImage = "url(2000back/Paradise.jpg)";
				counter4++;
			} else if (counter4 === 3){
				document.getElementById('html').style.backgroundImage = "url(2000back/Snow.jpg)";
				counter4++;
			} else if (counter4 === 4){
				document.getElementById('html').style.backgroundImage = "url(2000back/Solar.jpg)";
				counter4++;
			} else{
				document.getElementById('html').style.backgroundImage = "url(images/2000.png)";
				counter4 = 0;
			}
		}
		
	if (xpback === 1){
		if (counter4 === 0){
			document.getElementById('html').style.backgroundImage = "url(xpback/Ascent.jpg)";
			counter4++;
			} else if (counter4 === 1){
				document.getElementById('html').style.backgroundImage = "url(xpback/Autumn.jpg)";
				counter4++;
			} else if (counter4 === 2){
				document.getElementById('html').style.backgroundImage = "url(xpback/Azul.jpg)";
				counter4++;
			} else if (counter4 === 3){
				document.getElementById('html').style.backgroundImage = "url(xpback/Follow.jpg)";
				counter4++;
			} else if (counter4 === 4){
				document.getElementById('html').style.backgroundImage = "url(xpback/Friend.jpg)";
				counter4++;
			} else if (counter4 === 5){
				document.getElementById('html').style.backgroundImage = "url(xpback/Moon.jpg)";
				counter4++;
			} else if (counter4 === 6){
				document.getElementById('html').style.backgroundImage = "url(xpback/Radiance.jpg)";
				counter4++;
			} else if (counter4 === 7){
				document.getElementById('html').style.backgroundImage = "url(xpback/Red.jpg)";
				counter4++;
			} else if (counter4 === 8){
				document.getElementById('html').style.backgroundImage = "url(xpback/Stonhenge.jpg)";
				counter4++;
			} else if (counter4 === 9){
				document.getElementById('html').style.backgroundImage = "url(xpback/Tulips.jpg)";
				counter4++;
			} else if (counter4 === 10){
				document.getElementById('html').style.backgroundImage = "url(xpback/Vortec.jpg)";
				counter4++;
			} else if (counter4 === 11){
				document.getElementById('html').style.backgroundImage = "url(xpback/Wind.jpg)";
				counter4++;
			} else {
				document.getElementById('html').style.backgroundImage = "url(images/xp.jpg)";
				counter4 = 0;
			}
		}
	}
	
	
