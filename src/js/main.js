import './slider';
import bindModal from './modules/modals';
import {showModalByTimer} from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';


window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	const modalTimerId = setTimeout(() => showModalByTimer('.popup_engineer', modalTimerId), 60000);

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', modalTimerId);
	bindModal('.phone_link', '.popup_engineer', '.popup_engineer .popup_close', modalTimerId);
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', modalTimerId, false);
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', modalTimerId, false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', modalTimerId, false);

	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'slick-active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
	forms('form', 'input');

});