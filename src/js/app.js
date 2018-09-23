// JS Goes here - ES6 supported
import 'intersection-observer';
import Lazzzy from './utils/lazzzy';

var a = 'a';

(() => {

	window.onload = () => {
		const navigationToggleButton = document.querySelector('.nav__button');
		const navigationWrapper = document.querySelector('.rss__nav');
		const colorSwitch = document.querySelector('#colorSwitch');
		const mainContent = document.querySelector('.container');

		const intersectionObserverOptions = {
			root: document.querySelector('body'),
			rootMargin: '0px',
			threshold: 1.0,
		};

		console.info('I hope you like the 🚀 loading of  RAYs{FRONTEND}BYTES!');
		console.info('If you have any trouble with it? Please hit me on https://twitter.com/rsschouwenaar');

		function toggleNavigation() {
			navigationWrapper.classList.toggle('nav--active');
		}

		navigationToggleButton.addEventListener('click', toggleNavigation);

		function toggleDarkMode(element, checkbox) {
			if (checkbox) {
				element.classList.add('dark--mode');
			} else {
				element.classList.remove('dark--mode');
			}
			localStorage.setItem('darkMode', checkbox);
		}

		if (localStorage.getItem('darkMode') === 'true') {
			colorSwitch.checked = true;
			mainContent.classList.add('dark--mode');
		} else {
			colorSwitch.checked = false;
			mainContent.classList.remove('dark--mode');
		}

		colorSwitch.addEventListener('change', (event) => {
			toggleDarkMode(mainContent, event.target.checked);
		});

		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio > 0) {
					const lazyImage = new Lazzzy(entry.target);
					lazyImage.progressiveImageLoading();
					io.unobserve(entry.target);
				}
			});
		}, intersectionObserverOptions);

		[...document.querySelectorAll('.progressive-loader')].forEach((progressiveImage) => {
			io.observe(progressiveImage);
		});
	};
})();
