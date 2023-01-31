//story page
document.getElementById('about').onclick=function () {
	document.getElementById('story-page').style.display = 'block';
}
document.getElementById('readmore').onclick=function () {
	document.getElementById('story-page').style.display = 'block';
}

//products page
document.getElementById('products').onclick=function(){
	document.getElementById('products-page').style.display = 'block';
}

//menu
document.getElementById('menu-icon').onclick= ()=> {
	document.getElementById('menu-div').style.display = 'block';
}
document.getElementById('aboutus').onclick= ()=>{
	document.getElementById("story-page").style.display = 'block';
	document.getElementById("menu-div").style.display = 'none';
}
document.getElementById('ourproducts').onclick= ()=>{
	document.getElementById("story-page").style.display = 'block';
	document.getElementById("menu-div").style.display = 'none';
}
document.getElementById('Contact').onclick= ()=>{
	document.getElementById("menu-div").style.display = 'none';
}
document.getElementById('Services').onclick= ()=>{
	document.getElementById("menu-div").style.display = 'none';
}