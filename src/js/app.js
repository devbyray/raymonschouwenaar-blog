// JS Goes here - ES6 supported
import justlazy from 'justlazy/src/justlazy.js';
import 'prismjs';

// Say hello
console.log("🦊 Hello! Edit me in src/js/app.js");
(() => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }


    justlazy.registerLazyLoadByClass("justlazy");
})();
