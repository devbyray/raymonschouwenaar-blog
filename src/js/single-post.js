// JS Goes here - ES6 supported
(function () {
    console.log('🚀');
    const tocButtonElement = document.querySelector('[data-element="tocButton"]');
    const tocWrapperElement = document.querySelector('[data-element="tocWrapper"]');
    const tocNavTextElement = document.querySelector('[data-element="tocNavText"]');
    console.log('tocButtonElement: ', tocButtonElement);
    console.log('tocWrapperElement: ', tocWrapperElement);
    console.log('tocNavTextElement: ', tocNavTextElement);
    let tocToggle = false;

    if(tocButtonElement) {
        tocButtonElement.addEventListener('click', function (event) {
            if(!tocToggle) {
                tocNavTextElement.innerHTML = 'Hide table of contents';
            } else {
                tocNavTextElement.innerHTML = 'Show table of contents';
            }
            tocToggle = !tocToggle;
            tocWrapperElement.classList.toggle('toc--show');
        });
    }
})();