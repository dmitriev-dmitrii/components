


// кнопка скрола верх
const goTopBtn = document.querySelector('.go-top-btn');

goTopBtn.onclick = function goTop ()
{
	document.body.scrollTop = 0;
	document.scrollingElement.scrollTop = 0;
}

window.onscroll = function () {
	
	if ( document.body.scrollTop > 500 || document.scrollingElement.scrollTop > 500 )
	{
		goTopBtn.style.display= 'block';
	}
	else
	{
		goTopBtn.style.display= 'none';
	}
}

