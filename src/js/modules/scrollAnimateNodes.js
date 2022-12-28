export default function scrollAnimateNodes(params) {
	let { node, animatedClass } = params;
	if (document.querySelector('.desktop-user-agent')) {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(`${animatedClass}`);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				rootMargin: '30px',
			}
		);

		if (document.querySelector(node)) {
			document.querySelectorAll(node).forEach((item) => observer.observe(item));
		}
	}
}
