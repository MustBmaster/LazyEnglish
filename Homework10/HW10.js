var img=document.getElementById('img')
var btnHide=document.getElementById('Hide')
var btnShow=document.getElementById('Show')
var btnResize=document.getElementById('Resize')
var btnChange=document.getElementById('Change')


btnHide.onclick= function(){
    img.style.visibility='hidden'
}
btnShow.onclick= function(){
    img.style.visibility='visible'
}
btnResize.onclick= function(){
    img.style.height='500px'
    img.style.width='500px'
}
btnChange.onclick= function(){
    img.setAttribute('src','https://pngset.com/images/pokemon-raichu-image-raichu-pokemon-graphics-art-mammal-animal-transparent-png-2748128.png')='visible'
}

var txtTask=document.getElementById('task')
var btnAdd=document.getElementById('AddTask')
var list=document.getElementById('list')
btnAdd.onclick=function(){
    list.appendChild(txtTask.value)
}