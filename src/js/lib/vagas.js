;(function () {
	function httpGet() {
		return new Promise((resolve, reject) => {
			var xml = new XMLHttpRequest()
			xml.onreadystatechange = function () {
				xml.readyState == 4
					? xml.status == 200
						? resolve(JSON.parse(xml.responseText))
						: reject("Erro encontrado durante chamada da API.")
					: null
			}
			xml.open("GET", "https://vagas-js.herokuapp.com/vagas", true)
			xml.send(null)
		})
	}
	window.getVagas = async () => {
		try {
			var data = await httpGet()
			return data
		} catch (e) {
			throw new Error(e)
		}
	}
})()
