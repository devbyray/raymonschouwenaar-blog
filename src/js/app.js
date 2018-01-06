// JS Goes here - ES6 supported
import justlazy from 'justlazy/src/justlazy.js';

// Say hello
console.log("🦊 Hello! Edit me in src/js/app.js");
(() => {
    require('prismjs');

    justlazy.registerLazyLoadByClass("justlazy");

    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', () => {
    //         navigator.serviceWorker.register('/sw.js').then(registration => {
    //             console.log('SW registered: ', registration);
    //         }).catch(registrationError => {
    //             console.log('SW registration failed: ', registrationError);
    //         });
    //     });
    // }
})();
