export default function scrollToAnchor() {
	if (document.querySelector('.scroll-to-anchor')) {
		document.addEventListener('click', function (e) {
			let link = e.target.closest('.scroll-to-anchor');

			if (link) {
				e.preventDefault();
				scrollToTarget(link.hash);
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
				}

				window.scrollTo({
					top: pos,
					behavior: 'smooth',
				});
			}
		}
	}
}
