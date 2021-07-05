


const menu = document.querySelector('.nav'),
			burger = document.querySelector('.nav__burger'),
			overlay = document.querySelector('.overlay'),
            dropdownNavLists = document.querySelectorAll('.nav__list--dropdown');
			body=document.body

const scrollTop = () => {
	menu.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}


burger.addEventListener('click', (e) => {

	e.target.classList.toggle('active')
	menu.classList.toggle('active');
	overlay.classList.toggle('active');
	body.classList.toggle('scroll-lock');

	scrollTop();
});

overlay.addEventListener('click', () => {

	burger.classList.remove('active');
	menu.classList.remove('active');
	overlay.classList.remove('active');
	body.classList.remove('scroll-lock');

});

menu.addEventListener('click', (e) => {

	if (e.target.classList.contains('dropdown-open')) {

		e.preventDefault();

		dropdownNavLists.forEach(element => 
			element.classList.remove('active')
			);

		e.target.closest('.nav__list').classList.add('active');
		e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('active');

		scrollTop();

	}

	if (e.target.classList.contains('dropdown-back')) 

	{
		e.preventDefault();

		e.target.closest('.nav__list--dropdown').classList.remove('active');
		e.target.closest('.nav').querySelector('.nav__list').classList.remove('active');
		
		scrollTop();
	}

	if (e.target.classList.contains('nav__link') && !e.target.classList.contains('dropdown-open') &&  !e.target.classList.contains('dropdown-back')) {

		burger.classList.remove('active');
		menu.classList.remove('active');
		overlay.classList.remove('active');

		body.classList.remove('scroll-lock');
	}
});

