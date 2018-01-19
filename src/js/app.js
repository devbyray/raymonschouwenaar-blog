// JS Goes here - ES6 supported
import justlazy from 'justlazy/src/justlazy.js';

(() => {
    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', () => {
    //         navigator.serviceWorker.register('/sw.js').then(registration => {
    //             console.log('SW registered: ', registration);
    //             registration.pushManager.subscribe({userVisibleOnly: true});
    //         }).catch(registrationError => {
    //             console.log('SW registration failed: ', registrationError);
    //         });
    //     });
    // }

    justlazy.registerLazyLoadByClass("justlazy");
})();
