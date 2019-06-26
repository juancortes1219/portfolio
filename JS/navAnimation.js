const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.slideNavLinks');
	const navLinks = document.querySelectorAll('.slideNavLinks li')

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		navLinks.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `fadeIn 0.6s ease forwards ${index / 7 + 0.35}s`;
			}
		
		});

	});

}

navSlide();