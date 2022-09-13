export default function blockStyles() {
	if (document.querySelector('#contacts-form__weight')) {
		document.querySelector('#contacts-form__weight').addEventListener('input', (e) => {
			e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').substr(0, 10);
		});
	}

	if (document.querySelector('.map-wrapper')) {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.target.dataset.src) {
						entry.target.insertAdjacentHTML(
							'beforeend',
							`
									<iframe src="${entry.target.dataset.src}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
								`
						);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				rootMargin: '50px',
			}
		);
		document.querySelectorAll('.map-wrapper').forEach((item) => observer.observe(item));
	}
}
