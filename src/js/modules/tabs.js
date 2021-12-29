const tabs = (headerSelector, tabSelector, contentSelector, activeClass, hidden = false, display = 'block') => {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		content.forEach(item => {
			item.style.display = 'none';
		});
		tab.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		if (hidden === false) {
			content[i].style.display = display;
			tab[i].classList.add(activeClass);
		} else {
			content[i].style.display = display;
		}
	}

	hideTabContent();
	showTabContent();

	header.addEventListener('click', (e) => {
		const target = e.target;
		if (target.classList.contains(tabSelector.replace(/\./, '')) ||
			target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
			e.preventDefault();
			hidden = false;
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
};

export default tabs;