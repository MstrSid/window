const forms = (formSelector, inputSelector, state = {}) => {
	const form = document.querySelectorAll(formSelector),
		inputs = document.querySelectorAll(inputSelector),
		phoneInputs = document.querySelectorAll('input[name="user_phone"]');

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
				for(let key in state){
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
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				});
		});
	});
};

export default forms;