const container = document.getElementById('container');

const makeGrid = (rows, cols) => {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";

        cell.addEventListener("mouseenter", event => {
            event.target.style.backgroundColor  = "purple";
        

        setTimeout(() => {
            event.target.style.backgroundColor = "";
            },500);
        },false);
    }
};

const askGrid = () => {
    let answer = prompt('Put the number for the new grid(max 100): ');

    makeGrid(answer, answer);
};

