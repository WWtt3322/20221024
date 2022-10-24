function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#bfacb5");
}

function draw() {
 
  rectMode(CENTER)//設定方框的座標點為中心點
  noFill()//不充滿顏色
  //stroke(255)
 
  background("#bfacb5")
  for(var j=0;j<int(height/(49));j++)
		{
  for(var i=0;i<int(width/(48));i++)
      {
	stroke("#7f7b82")
	ellipse(25+(i*50),25+(j*50),50+(mouseX+mouseY)/800)
	stroke("#444554")
  rect(40+(i*50),25+(j*50),50+(mouseX+mouseY)/400)
	stroke("#172121")
  ellipse(50+(i*50),50+(j*50),20+(mouseX+mouseY)/4)
	    }
	  }		
	}