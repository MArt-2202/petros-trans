'use strict';

import debounce from './modules/debounce';
import blocksStyles from './modules/blocksStyles';
import blockPosition from './modules/blockPosition';
import tableWrapper from './modules/tableWrapper';
// import toggleContent from './modules/toggleContent';
import masketInput from './modules/masketInput';

if ('ontouchstart' in document.documentElement) {
	document.body.classList.add('touchdevice');
}

function isMobile(agent) {
	if (agent === void 0) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent);
}

if (isMobile()) {
	document.body.classList.add('mobile-user-agent');
}

document.addEventListener('DOMContentLoaded', () => {
	tableWrapper();
	// toggleContent();
	masketInput();
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
