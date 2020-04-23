const sizePicker = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');
const color = document.getElementById('colorPicker')


sizePicker.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    
    makeGrid(height, width);
    
    
   
});

function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < width; j++) {
        let cell = row.insertCell(j);
        }
        
    }
}
