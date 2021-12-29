const timer = (id, deadline) => {

	function getTimeRemain(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60) % 24)),
			minutes = Math.floor((t / (1000 * 60)) % 60),
			seconds = Math.floor((t / 1000) % 60);

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds,
		};
	}

	function zeroFormatter(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return `${num}`;
		}
	}

	function setTime(time, selector) {
		if (time <= 0) {
			selector.textContent = '00';
		} else {
			selector.textContent = zeroFormatter(time);
		}
	}

	function setTimer(selector, endtime){
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateTimer, 1000);

		updateTimer();

		function updateTimer(){
			const t = getTimeRemain(endtime);

			if(t.total <= 0){
				clearInterval(timeInterval);
			}

			setTime(t.days, days);
			setTime(t.hours, hours);
			setTime(t.minutes, minutes);
			setTime(t.seconds, seconds);

		}

	}
	setTimer(id, deadline);

};

export default timer;