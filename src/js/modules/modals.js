function bindModal(triggerSelector, modalSelector, closeSelector, timer, closeClickOverlay = true) {
	const trigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector),
		close = document.querySelector(closeSelector),
		windows = document.querySelectorAll('[data-modal]');


	trigger.forEach(item => {
		item.addEventListener('click', (event) => {
			if (event.target) {
				event.preventDefault();
			}
			windows.forEach(item => {
				item.style.display = 'none';
			});

			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			clearTimeout(timer);
		});
	});

	close.addEventListener('click', () => {
		windows.forEach(item => {
			item.style.display = 'none';
		});
		modal.style.display = 'none';
		document.body.style.overflow = '';
	});

	modal.addEventListener('click', (event) => {
		if (event.target === modal && closeClickOverlay === true) {
			windows.forEach(item => {
				item.style.display = 'none';
			});
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