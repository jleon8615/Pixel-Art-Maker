// defining variables
const sizePicker = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');
const color = document.getElementById('colorPicker');

// Event Listener function for the submit button
sizePicker.addEventListener('submit', function(e) {
    // This allows the grid to show up on the screen
    e.preventDefault();
    // This prevents the table from making more grids when
    // submit is pressed
    table.innerHTML = '';
    // This defined the value of height and the width
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    
    // here we called the grid function
    makeGrid(height, width);   
});


// This is the grid function
function makeGrid(height, width) {
    // The nested for loop that formed the grid
    for (let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            // This is the Event Listener to add color inside
            // the cells
            cell.addEventListener('click', function(e) {
                cell.style.backgroundColor = color.value;
            });
        
        }
        
    }
}
