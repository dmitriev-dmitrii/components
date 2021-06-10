let click = document.getElementById('click-here');
let close = document.querySelector('.close');
let close1 = document.querySelector('.close1');
click.addEventListener('click',function(){
    document.getElementById('container').classList.add('click');
})
close.addEventListener('click',function(){
    document.getElementById('container').classList.remove('click');
})
close1.addEventListener('click',function(){
    document.getElementById('container').classList.remove('click');
})