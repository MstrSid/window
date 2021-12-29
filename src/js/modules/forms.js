const forms = (formSelector, inputSelector, state, ...optionalSelectors) => {
	const form = document.querySelectorAll(formSelector),
		inputs = document.querySelectorAll(inputSelector),
		phoneInputs = document.querySelectorAll('input[name="user_phone"]'),
		optionalInputs = [];

	optionalSelectors.forEach(elem => {
		optionalInputs.push(document.querySelectorAll(elem));
	});

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо, скоро менеджер свяжется с Вами!',
		failure: 'Что-то пошло не так...',
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: 'POST',
			body: data,
		});
		return await res.text();
	};

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});

		optionalInputs.forEach(item => {
			item.forEach(elem => {
				switch (elem.nodeName) {
					case 'INPUT':
						if (elem.getAttribute('type') === 'checkbox') {
							elem.checked = false;
						}
						break;
					case 'SELECT':
						elem.selectedIndex = 0;
						break;
				}
			});
		});
	};

	phoneInputs.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/[^0-9^+^\-^(^)]/, '');
		});
	});

	form.forEach(item => {
		item.addEventListener('submit', (event) => {
			event.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);

			if (item.getAttribute('data-calc') === "end") {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				}).catch(() => {
					statusMessage.textContent = message.failure;
				}).finally(() => {
					clearInputs();
					/* костыль начался*/
					const tempClass = document.querySelectorAll('.do_image_more');
					if (tempClass.length > 0) {
						tempClass.forEach(elem => {
							elem.classList.remove('do_image_more');
						});
					}
					/* костыль закончился, простите за него */
					for (let key in state) {
						state[key] = 'unknown';
					}
					hiddenClass = true;
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				});
		});
	});
};

export let hiddenClass;
export default forms;