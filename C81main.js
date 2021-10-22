canvas= document.getElementById("myCanvas");
color="aqua";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =40;
ctx.arc(400,300,50,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    mouse_x= e.clientX-canvas.offsetLeft;
    mouse_y= e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(mouse_x,mouse_y,60,0,2*Math.PI);
ctx.stroke();
}