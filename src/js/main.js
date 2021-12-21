import './slider';
import bindModal from './modules/modals';
import {showModalByTimer} from './modules/modals';
import tabs from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(() => showModalByTimer('.popup_engineer', modalTimerId), 60000);

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', modalTimerId);
	bindModal('.phone_link', '.popup_engineer', '.popup_engineer .popup_close', modalTimerId);

	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'slick-active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');

});