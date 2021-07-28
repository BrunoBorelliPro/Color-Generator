const display = window.document.getElementById("color")
const btn = window.document.getElementById("button")
const body = window.document.getElementsByTagName("main")[0]

let hex = getAnHexadecimal()
applyColor(hex)


btn.addEventListener('click', (e)=>{
	let hex = getAnHexadecimal()
	applyColor(hex)
})

function applyColor(hex){
	hex = ("#"+hex).toUpperCase()
	display.innerHTML = hex
	changeColor(hex)
}

function getAnHexadecimal(){
	let numberRandon = Math.random() * 10000000
	number = Math.trunc(numberRandon)
	let hex = number.toString(16)
	if(hex.length !== 6){
		hex = getAnHexadecimal()
	}
	return hex
}

function changeColor(color){
	body.style.backgroundColor = color
}
