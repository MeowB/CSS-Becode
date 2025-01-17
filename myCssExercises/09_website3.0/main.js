let cross = document.querySelector('.cross')
let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')

cross.addEventListener('click', () => {
	hamburger.style.display = 'inline-block'
	cross.style.display = 'none'
	hamburger.style.opacity = '0'


	let i = 1
	let fadeoutMenu = setInterval(() => {
		i = i - 0.01

		menu.style.opacity = `${i}`
		if (i < 0) {
			clearInterval(fadeoutMenu)
			menu.style.display = 'none'
		}
	}, 10)

	let y = 0
	let fadeHamburger = setInterval(() => {
		y = y + 0.01

		hamburger.style.opacity = `${y}`
		if (y >= 1) {
			clearInterval(fadeHamburger)
		}
	}, 10)
})

hamburger.addEventListener('click', () => {
	cross.style.display = 'inline-block'
	hamburger.style.display = 'none'
	menu.style.display = 'inline-block'

	cross.style.opacity = '0'
	let i = 0
	let fadeCross = setInterval(() => {
		i = i + 0.01

		menu.style.opacity = `${i}`
		cross.style.opacity = `${i}`
		if (i >= 1) {
			clearInterval(fadeCross)
		}
	}, 10)
})