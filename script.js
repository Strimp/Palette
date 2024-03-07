//if (window.screen.width < 667) {
//	document.querySelector('body').innerHTML += `<p style="text-align: center; font-family: arial;">Para celular</p>`	
//} else {
//	document.querySelector('body').innerHTML += `<p style="text-align: center; font-family: arial;">Para desktop</p>`
//}

function generateColorPalette(initialColor) {
	const palette = [initialColor]

	const r = parseInt(initialColor.substr(1, 2), 16)
	const g = parseInt(initialColor.substr(3, 2), 16)
	const b = parseInt(initialColor.substr(5, 2), 16)

	for (let i = 1; i <= 5; i++) {
		const factor = i * 0.2
		const newR = Math.floor(r + (255 - r) * factor)
		const newG = Math.floor(g + (255 - g) * factor)
		const newB = Math.floor(b + (255 - b) * factor)

		const newColor = "#" + ((1 << 24) | (newR << 16) | (newG << 8) | newB).toString(16).slice(1)
		palette.push(newColor)
	}

	return palette
}

function select() {
	document.querySelector('.paletas').innerHTML = ` `
	localStorage.setItem('boo', true)
	let color = document.querySelector('#pick').value
	const palette = generateColorPalette(color)

	localStorage.setItem('color1', palette[4])
	localStorage.setItem('color2', palette[3])
	localStorage.setItem('color3', palette[2])
	localStorage.setItem('color4', palette[1])
	localStorage.setItem('color5', palette[0])

	for (var i = 0; i < 5; i++) {
		document.querySelector('.paletas').innerHTML += `<div id="pinto" style="background-color: ${palette[i]};" onmouseover="dedo(this)"> </div>`
	}
}

function dedo(element) {
	var teste = element.style.backgroundColor
    document.querySelector('#hexdec').innerHTML = teste
}