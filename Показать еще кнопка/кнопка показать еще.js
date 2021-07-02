// vb1 это  video button 1


const hideBtn = document.getElementById('vb1');

let hideItems = document.querySelectorAll('.hide-block')
hideBtn.onclick = function(){

	hideItems.forEach(function(item, i)
	{
		item.classList.toggle('hide-block');

	
if (hideBtn.innerText === 'показать еще') 
{
    hideBtn.innerText='скрыть';
} 
else 
{
hideBtn.innerText='показать еще';
}
	}
	);
	}
