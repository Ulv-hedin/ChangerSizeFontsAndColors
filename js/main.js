const btnSizeUp = document.querySelector('.sizeUp')
const btnSizeDown = document.querySelector('.sizeDown')
const changeColor = document.querySelector('.color')
const text = document.querySelector('p')

let fontSize = 36

const sizeUpp = () => {
	fontSize++
	fontSize = fontSize + 5
	text.style.fontSize = fontSize + 'px'
}

const sizeDownn = () => {
	if (fontSize <= 20) {
		return
	}
	fontSize--
	fontSize = fontSize - 5
	text.style.fontSize = fontSize + 'px'
}

const colorChanger = () => {
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)
	const r = Math.floor(Math.random() * 255)

	text.style.color = `rgb(${r},${g},${b})`

	// 	// console.log(`${r}`);
}
btnSizeUp.addEventListener('click', sizeUpp)
btnSizeDown.addEventListener('click', sizeDownn)
changeColor.addEventListener('click', colorChanger)
