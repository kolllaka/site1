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

// Accardeon
function accardeon() {
	const acardeon = document.querySelector('.acardeon')
	const acardeonbtns = document.querySelectorAll('.acardeon__btn')

	acardeonbtns.forEach((acardeonbtn, index) => {
		acardeonbtn.addEventListener('click', e => {
			e.preventDefault();

			const acardeoncontent = acardeonbtn.closest('.acardeon__item').querySelector('.acardeon__content')
			if (!acardeonbtn.classList.contains('active')) {
				acardeonbtn.classList.add('active')
				acardeoncontent.classList.add('active')
			} else {
				acardeonbtn.classList.remove('active')
				acardeoncontent.classList.remove('active')
			}
		});
	});
};
accardeon();

// switch
function myswitch() {
	const myswitches = document.querySelectorAll('.switch');

	myswitches.forEach((myswitch, index) => {
		const switchbtn = myswitch.querySelector('.switch__btn');
		const switchright = myswitch.querySelector('.switch__right')
		const switchleft = myswitch.querySelector('.switch__left')

		switchbtn.addEventListener('click', e => {
			e.preventDefault();

			if (!switchbtn.classList.contains('active')) {
				switchbtn.classList.add('active')
			} else {
				switchbtn.classList.remove('active')
			};

			switchleft.classList.toggle('toggle')
			switchright.classList.toggle('toggle')
		});
	});
};
myswitch();