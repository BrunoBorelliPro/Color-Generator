const display = window.document.getElementById("color")
const btn = window.document.getElementById("button")
const body = window.document.getElementsByTagName("main")[0]
const copyBtn = window.document.getElementById("copyBtn")
let hex = getAnHexadecimal()
applyColor(hex)


btn.addEventListener('click', (e)=>{
	let hex = getAnHexadecimal()
	applyColor(hex)
})

copyBtn.addEventListener('click', ()=>{

	let toCopy = document.createElement('input')
	document.body.appendChild(toCopy)
	toCopy.setAttribute("id", "toCopyId")

	document.getElementById("toCopyId").value = display.innerHTML
	toCopy.focus()
	toCopy.select()
	document.execCommand('copy')

	document.body.removeChild(toCopy)
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
