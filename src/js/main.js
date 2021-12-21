import './slider';
import bindModal from './modules/modals';
import {showModalByTimer} from './modules/modals';


window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(() => showModalByTimer('.popup_engineer', modalTimerId), 60000);

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', modalTimerId);
	bindModal('.phone_link', '.popup_engineer', '.popup_engineer .popup_close', modalTimerId);

});