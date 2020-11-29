//Init Counter and Timer
let clickers = 15;
let startTime = Date.now();


console.log("Start JS");
//Determine image placement
function sync(dom, pos) {
	console.log("Func Sync");
	dom.style.left = `${pos.x}px`; 
	dom.style.top = `${pos.y}px`;
}

//Add the Ricks
function addClicker() {
	console.log("Func Addclicker");
	//Create x/y coord for Sync Func
    const pos = {
		x: Math.random() * 500,
		y: Math.random() * 300
	}
	
	//Create new image
    console.log("img setup");
    const img = new Image();  
    img.src = "res/images/rick.png";
    img.style.position = "absolute";

	//Start Event Listener; stays active after initial run.
	img.addEventListener("click", removeClicker, false);

	//Place image; use Sync Func for placement
    console.log("place img");
    document.querySelector("#board").appendChild(img);
	//Show Rick Count
	document.getElementById("Count").innerHTML= "Rick Count: " + clickers;
    console.log("call sync");
    sync(img, pos);  
}

//Remove Ricks; Called upon Click Event
function removeClicker(e) {
	//Rem image clicked on
	e.target.parentNode.removeChild(e.target);
	//Reduce Image count
	clickers--;
	//Show Rick Count
	document.getElementById("Count").innerHTML= "Rick Count: " + clickers;
	//Check for End of Game
	checkGameOver();
}

//Check if Image Count = 0
function checkGameOver() {
	if (clickers === 0) {
		//Post DeClicking Time
		const taken = Math.round((Date.now() - startTime) / 1000);
		alert(`De-rick-ed in ${taken} seconds!`);
	}
}

// Loop to add the Ricks
for (let i = 0; i < clickers; i++) {
	addClicker();
}
