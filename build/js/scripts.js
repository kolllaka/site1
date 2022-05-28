// Custom Scripts
// Custom Scripts
// Burger menu
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.burger__menu')
	const body = document.querySelector('body')
	const btns = document.querySelector('.header__buttons')
	burger.addEventListener('click', () => {
		if (!menu.classList.contains('active')) {
			menu.classList.add('active')
			burger.classList.add('active')
			body.classList.add('locked')
			btns.classList.add('active')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
			btns.classList.remove('active')
		}
	})

	// navbar breakpoints
	window.addEventListener('resize', () => {
		if (window.innerWidth > 767.98) {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
			btns.classList.remove('active')
		}
	})
}
burgerMenu()

// Fixed menu when scroll
function fixedNav() {
	const nav = document.querySelector('nav')

	// 
	const breakpoints = 1
	if (window.scrollY >= breakpoints) {
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav)