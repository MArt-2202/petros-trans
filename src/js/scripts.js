'use strict';

import debounce from './modules/debounce';
import blocksStyles from './modules/blocksStyles';
import blockPosition from './modules/blockPosition';
import tableWrapper from './modules/tableWrapper';
import toggleContent from './modules/toggleContent';
import scrollToAnchor from './modules/scrollToAnchor';
import scrollAnimateNodes from './modules/scrollAnimateNodes';

if ('ontouchstart' in document.documentElement) {
	document.body.classList.add('touchdevice');
}

function isMobile(agent) {
	if (agent === void 0) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent);
}

if (isMobile()) {
	document.body.classList.remove('desktop-user-agent');
	document.body.classList.add('mobile-user-agent');
} else {
	document.body.classList.remove('mobile-user-agent');
	document.body.classList.add('desktop-user-agent');
}

document.addEventListener('DOMContentLoaded', () => {
	tableWrapper();
	toggleContent();
	scrollToAnchor();
	scrollAnimateNodes({
		node: 'h1',
		animatedClass: 'flipInX',
	});
	scrollAnimateNodes({
		node: '.top-section li',
		animatedClass: 'slideInLeft',
	});
	scrollAnimateNodes({
		node: '.top-section__more-info-btn, .services-list li, .contacts__aside, .feedback-wrapper',
		animatedClass: 'slideInUp',
	});
	scrollAnimateNodes({
		node: 'h2',
		animatedClass: 'slideInLeft',
	});
	scrollAnimateNodes({
		node: '.top-section__img, h3, .about__main p, .about__main li, .contacts__list li, .article li, .article p',
		animatedClass: 'fadeIn',
	});
}); // END READY

window.addEventListener('resize', () => {
	debounce(function () {
		blockPosition(function () {
			if (document.querySelector('header') && !document.querySelector('.header--init')) {
				document.querySelector('header').classList.add('header--init');
			}
		});
	}, 200);
});

window.addEventListener('load', () => {
	debounce(function () {
		blocksStyles();
		blockPosition(function () {
			if (document.querySelector('header') && !document.querySelector('.header--init')) {
				document.querySelector('header').classList.add('header--init');
			}
		});
	}, 200);
});
