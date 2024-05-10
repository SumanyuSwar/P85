canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

var car_w = 100;
var car_h = 75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var car_x = 5;
var car_y = 225;

function add() {
	background_Image_tag = new Image();
	background_Image_tag.onload = uploadBackground;
	background_Image_tag.src = background_image;

	car_Image_tag = new Image();
	car_Image_tag.onload = uploadgreencar;
	car_Image_tag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_Image_tag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_Image_tag, car_x, car_y, car_h, car_w);
}

function up()
{
	if (car_y >= 0){
		car_y= car_y - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (car_y <= 500){
		car_y= car_y + 10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (car_x >= 0){
		car_x= car_x - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if (car_x <= 700){
		car_x= car_x + 10;
		uploadBackground();
		uploadgreencar();
	}
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

