export default function scrollToAnchor() {
	if (document.querySelector('.scroll-to-anchor')) {
		document.addEventListener('click', function (e) {
			let link = e.target.closest('.scroll-to-anchor');

			if (link) {
				e.preventDefault();
				scrollToTarget(link.hash);

				if (document.querySelector('.content-visible')) {
					document.querySelector('.toggle-btn').classList.remove('toggle-btn-style');
					document.querySelector('.toggle-wrapper > div').classList.remove('content-visible');
					document.querySelector('.overlay').classList.remove('overlay-visible');

					document.body.style.overflowY = '';
					document.body.style.paddingRight = '';
				}
			}
		});

		if (location.hash !== '') {
			scrollToTarget(location.hash);
		}

		function scrollToTarget(id) {
			let target = document.querySelector(id);

			if (target !== null) {
				let pos = target.offsetTop;

				if (document.querySelector('.mobile-user-agent')) {
					pos = pos - document.querySelector('header')?.offsetHeight;
				} else {
					pos = pos - 112;
				}

				window.scrollTo({
					top: pos,
					behavior: 'smooth',
				});
			}
		}
	}
}
