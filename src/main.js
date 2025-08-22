const buttons = document.querySelectorAll( "button" )

buttons.forEach( button => {

	button.onclick = () => {

		button.textContent = [ "X", "Y", "Z" ][ ( Math.random() * 3 ) | 0 ]
	}
} )
