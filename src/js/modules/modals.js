function bindModal(triggerSelector, modalSelector, closeSelector, timer, closeClickOverlay = true) {
	const trigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector),
		close = document.querySelector(closeSelector),
		windows = document.querySelectorAll('[data-modal]'),
		scroll = calcScroll();


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
			document.body.style.marginRight = `${scroll}px`;
			clearTimeout(timer);
		});
	});

	close.addEventListener('click', () => {
		windows.forEach(item => {
			item.style.display = 'none';
		});
		modal.style.display = 'none';
		document.body.style.overflow = '';
		document.body.style.marginRight = `0px`;
	});

	modal.addEventListener('click', (event) => {
		if (event.target === modal && closeClickOverlay === true) {
			windows.forEach(item => {
				item.style.display = 'none';
			});
			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = `0px`;
		}
	});
}

function calcScroll(){
	let div = document.createElement('div');
	div.style.width = '50px';
	div.style.height = '50px';
	div.style.overflowY = 'scroll';
	div.style.visibility = 'hidden';

	document.body.appendChild(div);

	let scrollWidth = div.offsetWidth - div.clientWidth;

	div.remove();

	return scrollWidth;
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