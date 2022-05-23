document.addEventListener("DOMContentLoaded", () => {
	const isReduced =
		window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
		window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true

	if (isReduced) return

	const observer = new IntersectionObserver((obs) => {
		obs.forEach((o) => {
			o.target.toggleAttribute("on-screen", o.isIntersecting)
			o.target.style = o.isIntersecting ? "" : "opacity: 0"
		})
	})

	const observerElements = document.querySelectorAll("[show-animation]")
	observerElements.forEach((e) => {
		e.style = "opacity: 0"
		observer.observe(e)
	})
})
