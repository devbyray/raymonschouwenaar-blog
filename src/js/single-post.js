(function () {
    console.log('🚀');
    const tocButtonElement = document.querySelector('[data-element="tocButton"]');
    const tocWrapperElement = document.querySelector('[data-element="tocWrapper"]');
    const tocNavTextElement = document.querySelector('[data-element="tocNavText"]');
    const disqusCommentsButtonElement = document.querySelector('[data-element="disqusCommentsButton"]');
    const disqusShowCommentsElement = document.querySelector('[data-element="disqusShowComments"]');
    const disqusCommentsElement = document.querySelector('[data-element="disqusComments"]');
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

    if(disqusCommentsButtonElement) {
        disqusCommentsButtonElement.addEventListener('click', function() {

            console.log('disqusCommentsElement', disqusCommentsElement);
            console.log('disqusShowCommentsElement', disqusShowCommentsElement);
            disqusCommentsElement.removeChild(disqusShowCommentsElement);

            if (["localhost", "127.0.0.1"].indexOf(window.location.hostname) != -1) {
                document.getElementById('disqus_thread').innerHTML = 'Disqus comments not available by default when the website is previewed locally.';
                return;
            }
            var d = document, s = d.createElement('script'); s.async = true;
            s.src = '//' + window.DisqusShortname + '.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);

        });
    }


})();