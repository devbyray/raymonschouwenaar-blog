(() => {
	const tocButtonElement = document.querySelector('[data-element="tocButton"]');
	const tocWrapperElement = document.querySelector('[data-element="tocWrapper"]');
	const tocNavTextElement = document.querySelector('[data-element="tocNavText"]');
	let tocToggle = false;

	if (tocButtonElement) {
		tocButtonElement.addEventListener('click', () => {
			tocNavTextElement.innerHTML = !tocToggle ? 'Hide table of contents' : 'Show table of contents';
			tocToggle = !tocToggle;
			tocWrapperElement.classList.toggle('toc--show');
		});
	}
})();
