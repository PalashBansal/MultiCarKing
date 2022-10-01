var screenWidth, screenHeight; // 1366*768 here

function createPage()
{
	screenWidth =  window.screen.availWidth;
	screenHeight = window.screen.availHeight;
	var logo  = "<img src=\"meta/Logo.png\" style=\"position:absolute; top:40px; left:90px; width:" + screenWidth/4 + "px; height:" + screenHeight/4 + "px;\" MultiCarKing </img>";
	
	document.body.innerHTML += logo;
}