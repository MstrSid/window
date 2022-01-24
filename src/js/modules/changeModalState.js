import checkNumInput from "./checkNumInput";

const changeModalState = (state) => {
	const balconyType = document.querySelectorAll('.balcon_icons_img'),
		windowWidth = document.querySelectorAll('#width'),
		windowHeight = document.querySelectorAll('#height'),
		windowType = document.querySelectorAll('#view_type'),
		windowProfile = document.querySelectorAll('.checkbox');

	checkNumInput('#width');
	checkNumInput('#heigth');


	function setStateModal(event, elem, prop) {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
					case 'SPAN':
						state[prop] = i;
						break;
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							i === 0 ? state[prop] = 'cold' : state[prop] = 'warm';
							elem.forEach((box, j) => {
								box.checked = false;
								if (j === i) {
									box.checked = true;
								}
							});
						} else {
							state[prop] = item.value;
						}
						break;
					case 'SELECT':
						state[prop] = item.value;
						break;
				}
			});
		});

	}

	setStateModal('click', balconyType, 'bType');
	setStateModal('input', windowWidth, 'width');
	setStateModal('input', windowHeight, 'height');
	setStateModal('change', windowType, 'wType');
	setStateModal('click', windowProfile, 'profile');

};

export default changeModalState;