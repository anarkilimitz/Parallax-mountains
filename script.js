const myParallax = new Parallax(document.querySelectorAll('.parallax'));

window.addEventListener('scroll', function () {
	const footer = document.querySelector('.footer-img');
	const triggerPoint = 250;

	if (window.scrollY > triggerPoint) {
		footer.classList.add('visible');
	} else {
		footer.classList.remove('visible');
	}
});
