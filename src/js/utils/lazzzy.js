export default class Lazzzy {
	constructor(progressiveImageInput) {
		this.imageInput = progressiveImageInput;
	}

	progressiveImageLoading() {
		const imagePlaceholder = this.imageInput;
		const placholderSpacer = this.imageInput.querySelector('.spacer');

		// 1: load small image and show it
		if (!imagePlaceholder.classList.contains('image--loaded')) {
			this.loadImage('small').then((smallImage) => {
				imagePlaceholder.appendChild(smallImage);

				this.loadImage('large').then((placeholderImage) => {
					imagePlaceholder.appendChild(placeholderImage);
				}).then(() => {
					imagePlaceholder.removeChild(placholderSpacer);
					imagePlaceholder.removeChild(imagePlaceholder.querySelector('.small-loaded'));
					imagePlaceholder.classList.add('image--loaded');
				});
			});
		}
	}

	loadImage(typeImage) {
		// Object destructering
		// https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Operatoren/Destructuring_assignment
		const { dataset: { small: smallImg, large: largeImg } } = this.imageInput;

		return new Promise((resolve, reject) => {
			const img = new Image();

			img.src = typeImage === 'small' ? smallImg : largeImg;

			img.onload = () => {
				img.classList.add(typeImage === 'small' ? 'small-loaded' : 'large-loaded');
				resolve(img);
			};

			img.onerror = () => {
				console.error('Image could not be loaded: ', img);
				reject(img);
			};
		});
	}
}
