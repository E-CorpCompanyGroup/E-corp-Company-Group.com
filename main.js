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

//menu-phone
document.getElementById('menu-icon').onclick= ()=> {
	document.getElementById('menu-div').style.display = 'block';
}
document.getElementById('aboutus').onclick= ()=>{
	document.getElementById("story-page").style.display = 'block';
	document.getElementById("menu-div").style.display = 'none';
}
document.getElementById('ourproducts').onclick= ()=>{
	document.getElementById("products-page").style.display = 'block';
	document.getElementById("menu-div").style.display = 'none';
}
document.getElementById('Contact').onclick= ()=>{
	document.getElementById("menu-div").style.display = 'none';
}
document.getElementById('Services').onclick= ()=>{
	document.getElementById("menu-div").style.display = 'none';
}
EmailShow=()=>{
	let EmailShow=document.querySelector('#Email-div');
	EmailShow.style.width=80+"%";
}
EmailClose=()=>{
	let EmailShow=document.querySelector('#Email-div');
	EmailShow.style.width=0+"%";
}
ero=()=>{
	open('https://eroindustries.business.site/');
}
