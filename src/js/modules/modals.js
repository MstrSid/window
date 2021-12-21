function bindModal(triggerSelector, modalSelector, closeSelector, timer) {
	const trigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector),
		close = document.querySelector(closeSelector);


	trigger.forEach(item => {
		item.addEventListener('click', (event) => {
			if (event.target) {
				event.preventDefault();
			}

			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			clearTimeout(timer);
		});
	});

	close.addEventListener('click', () => {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	});

	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			modal.style.display = 'none';
			document.body.style.overflow = '';
		}
	});
}

function showModalByTimer(selector, timer) {
	document.querySelector(selector).style.display = 'block';
	document.body.style.overflow = 'hidden';
	if (timer) {
		clearTimeout(timer);
	}
}

export default bindModal;

export {
	showModalByTimer
};