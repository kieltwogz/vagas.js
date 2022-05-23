document.addEventListener("DOMContentLoaded", () => {
	const wrapper = document.querySelector("#example .example__wrapper")
	const left = document.querySelector("#example__left")
	const right = document.querySelector("#example__right")

	function scroll(direction = 1) {
		let id_ = setInterval(() => {
			wrapper.scrollTo({
				left: wrapper.scrollLeft + 20 * direction
			})
		}, 10)
		return () => clearInterval(id_)
	}

	left.addEventListener("mousedown", () => {
		let scrollRemove = scroll(-1)
		this.addEventListener("mouseup", () => scrollRemove())
	})

	left.addEventListener("touchstart", () => {
		let scrollRemove = scroll(-1)
		this.addEventListener("touchend", () => scrollRemove())
	})

	right.addEventListener("mousedown", () => {
		let scrollRemove = scroll()
		this.addEventListener("mouseup", () => scrollRemove())
	})

	right.addEventListener("touchstart", () => {
		let scrollRemove = scroll()
		this.addEventListener("touchend", () => scrollRemove())
	})

	// Usar a biblioteca Vagas.Js
	getVagas().then((vagas) => {
		wrapper.innerHTML = ""
		vagas.forEach((v) => {
			wrapper.innerHTML += `
            <div class="simple-card simple-card--bigger">
                <div class="simple-card__right">
                    <p>${v}</p>
                </div>
            </div>`
		})
	})
})
