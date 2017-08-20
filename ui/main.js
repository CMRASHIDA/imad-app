console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='New value';
var img=document.getElementById('rashi');
var marginLeft=0;
function moveRight()
{
    marginLeft=maginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var intervel=setIntervel(moveRight,100);
};