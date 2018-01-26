// JS Goes here - ES6 supported
import 'intersection-observer';

(() => {
    console.log('Welcome to RAYs{FRONTEND}BYTES! Hopefully you like the 🚀 loading! If you have any trouble with it? Please hit me on https://twitter.com/rsschouwenaar');

//Add this below content to your HTML page, or add the js file to your page at the very top to register sercie worker
    if (navigator.serviceWorker.controller) {

        console.log('[PWA Builder] active service worker found, no need to register')

    } else {

        //Register the ServiceWorker
        navigator.serviceWorker.register('sw-custom.js', {
            scope: './'
        }).then(function(reg) {
            console.log('Service worker has been registered for scope:'+ reg.scope);
        });
    }
    window.onload = function() {
        console.log('onload');

        const intersectionObserverOptions = {
            root: document.querySelector('body'),
            rootMargin: '0px',
            threshold: 1.0
        };
        const io = new IntersectionObserver(entries => {
            // console.log('entries: ', entries);
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                  console.log('in the view: ', entry);
                  progressiveImageLoading(entry.target);
                  io.unobserve(entry.target);
                } else {
                  console.log('out of view: ', entry);
                }
            });
        });

        [...document.querySelectorAll('.progressive-loader')].map(progressiveImage => {
            io.observe(progressiveImage);
        });

        // For each image loop maken
        function progressiveImageLoading(progressiveImageInput) {
            let imagePlaceholder = progressiveImageInput;
            let placholderSpacer = progressiveImageInput.querySelector('.spacer');
            // console.log('progressiveImageInput: ', progressiveImageInput.querySelector('.placeholder'));
            // 1: load small image and show it
            if(!imagePlaceholder.classList.contains('image--loaded')) {
                loadImage(imagePlaceholder, 'small').then(smallImage => {
                    imagePlaceholder.appendChild(smallImage);
                    loadImage(imagePlaceholder, 'large').then(placeholderImage => {
                        // console.log('placeholderImage: ', placeholderImage)
                        // console.log('imagePlaceholder: ', imagePlaceholder)
                        imagePlaceholder.appendChild(placeholderImage);
                        // placeholderImage.classList.add('large-loaded');
                    }).then(() => {
                        imagePlaceholder.removeChild(placholderSpacer);
                        imagePlaceholder.removeChild(imagePlaceholder.querySelector('.small-loaded'));
                        imagePlaceholder.classList.add('image--loaded');
                    });
                });
            }
        }

        function loadImage(imageSelector, typeImage) {
            return new Promise((resolve, reject) => {
                var img = new Image();
                img.src = typeImage === 'small' ? imageSelector.dataset.small : imageSelector.dataset.large;
                img.onload = () => {
                    // console.log('Loaded!!: ', img);
                    let imageClass = typeImage === 'small' ? 'small-loaded' : 'large-loaded';
                    img.classList.add(imageClass);
                    resolve(img);
                };
                img.onerror = () => {
                    console.error('Image could not be loaded: ', img);
                    reject(img);
                }
            });
        }

    }

})();
