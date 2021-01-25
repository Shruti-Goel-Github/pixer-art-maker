//Getting the Parents element for table creation and dimension value
var tableParent = document.getElementById('pixelCanvas')
var dimValue = document.getElementById('sizePicker')

//Create a submit event to get the value of height and width,
dimValue.addEventListener("submit", main);

//Main function definition for performing the task on page
function main(event){
	event.preventDefault();
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value; 	
	makeGrid(height, width)
	colorCell()
}

//Function to create a grid of size hXw
function makeGrid(h, w) {
	var removeTab = document.querySelector('.table')	
	if (removeTab != null){
	document.querySelectorAll('.table').forEach(function(a){
			a.remove()})      
    createTable(h, w)
	}
	else{
		createTable(h, w)}	
	}


//Function to create a table		
function createTable(h, w){
	for (var i = 1; i <= h; i++) {
        tableParent.insertAdjacentHTML("afterbegin", "<tr class = table></tr>");
        var row = document.querySelector(".table");
        for (var j = 1; j <= w; j++) {
            row.insertAdjacentHTML("afterbegin","<td class = cell></td>");}
	}
}

//Function to get the cell to color
function colorCell(){
	var CellToColor = document.getElementsByClassName('cell');   
	for (var i = 0; i < CellToColor.length; i++){
		clickColor(CellToColor[i])
	}
}

//Function to listen the click of the mouse and color the cell
function clickColor(cell){
	var colorToUsed = document.getElementById('colorPicker');	
	cell.addEventListener("click", function(event){
		var CellClicked = event.target;
		var attrib = CellClicked.hasAttribute("style")
		if (attrib === true){
			CellClicked.removeAttribute("style");
		}
		else {
		CellClicked.style.backgroundColor = colorToUsed.value;}
	})
}