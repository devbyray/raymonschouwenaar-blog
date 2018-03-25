// JS Goes here - ES6 supported
import 'intersection-observer';
import Lazzzy from './utils/lazzzy'

(() => {
  console.info('I hope you like the 🚀 loading of  RAYs{FRONTEND}BYTES!');
	console.info('If you have any trouble with it? Please hit me on https://twitter.com/rsschouwenaar');
  // Add this below content to your HTML page,
  // or add the js file to your page at the very top to register sercie worker
  // if ('serviceWorker' in navigator) {
  //   if (navigator.serviceWorker.controller) {
  //     console.info('[PWA Builder] active service worker found, no need to register');
  //   } else {
  //     // Register the ServiceWorker
  //     navigator.serviceWorker
  //       .register('sw-custom.js', {
  //         scope: './',
  //       })
  //       .then((reg) => {
  //         console.info(`Service worker has been registered for scope: ${reg.scope}`);
  //       });
  //   }
  // }


	function toggleDarkMode(element, checkbox) {
		if(checkbox) {
			element.classList.add('dark--mode');
		} else {
			element.classList.remove('dark--mode');
		}
		localStorage.setItem('darkMode', checkbox);
	}


  window.onload = () => {
		const colorSwitch = document.querySelector('#colorSwitch');
		const mainContent = document.querySelector('.container');

		if(localStorage.getItem('darkMode') === 'true') {
			colorSwitch.checked = true;
			mainContent.classList.add('dark--mode');
		} else {
			colorSwitch.checked = false;
			mainContent.classList.remove('dark--mode');
		}

		colorSwitch.addEventListener('change', (event) => {
			toggleDarkMode(mainContent, event.target.checked);
		});

		const intersectionObserverOptions = {
      root: document.querySelector('body'),
      rootMargin: '0px',
      threshold: 1.0
		};


    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
					const lazyImage = new Lazzzy(entry.target);
          lazyImage.progressiveImageLoading();
          io.unobserve(entry.target);
        }
      });
    });

    [...document.querySelectorAll('.progressive-loader')].forEach((progressiveImage) => {
        io.observe(progressiveImage);
    });

	};

})();
