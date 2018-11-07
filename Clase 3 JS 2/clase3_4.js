
function over(){
    var grande=document.getElementById("grande");
    grande.src=this.src;
}
function out(){
    var grande=document.getElementById("grande");
    grande.src="img/sinfoto.jpg"
}
for (let i=1;i<=4;i++){
    var img=document.getElementById("img"+i);
    img.onmousedown = over;
    img.onmouseup = out;
}