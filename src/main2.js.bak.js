//this function takes two arguments: the object name and the pos data structure

console.log("Start JS");
function sync(dom, pos) {
  console.log("Func Sync");
  dom.style.left = `${pos.x}px`;  //pos.x is a custom data structure  defined in the addClicker function
  dom.style.top = `${pos.y}px`;
  //img.style.left = `${Math.random() * 500}px`;
  //img.style.top = `${Math.random() * 300}px`;
}

(function addClicker() {
  for (i=0; i<3; i++) {
	console.log("Func Addclicker");
    const pos = {
      x: Math.random() * 500,
      y: Math.random() * 300
    };

    console.log("img setup");
    const img = new Image();  //creating a new image element in the DOM
    img.src = "res/images/rick.png";
    img.style.position = "absolute";

    console.log("place img");
    document.querySelector("#board").appendChild(img);
    console.log("call sync");
    sync(img, pos);  //position the img object on inside the coordinate system in CSS using left and top
  }

//sync();

}())