const body = document.querySelector('body');
const container = document.querySelector('#container');
const buttonDiv = document.createElement('button');

let n = 16;

buttonDiv.textContent = 'Choose your grid!';
buttonDiv.addEventListener('click', function() {
    let answer = prompt('How many squares per side of the grid do you need?');
    while (answer !== null && isNaN(parseInt(answer))) {
        answer = prompt(`You entered ${answer}... That is not a number, lol. Try again!`);
    }
    while (answer !== null && parseInt(answer) > 100) {
        answer = prompt(`You entered ${answer}, which is higher than 100! I won't let you blow up the servers! :D`);
    }
    n = parseInt(answer);

    createDivGrid();
});

function createDivGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (i = 0; i < n * n; i++) {
        const squareDiv = document.createElement('div');

        function randomizeColor() {
            const rgb = '0123456789ABCDEF';
            let color = '#';
            for (i = 0; i < 6; i++) {
                color += rgb[Math.floor(Math.random() * n)];
            }
            return color;
        }

        let mouseoverCount = 0;
        squareDiv.addEventListener('mouseover', function() {
            mouseoverCount++;
            squareDiv.style.backgroundColor = randomizeColor();
            squareDiv.style.opacity = 1 - 0.1 * mouseoverCount;
        });
        // squareDiv.addEventListener('mouseout', function () {
        //     squareDiv.style.backgroundColor = 'aqua';
        // });
        squareDiv.style.flex = `1 0 calc(100% / ${n} - 2px)`;
        container.appendChild(squareDiv);
    }
};

createDivGrid(16);

body.appendChild(buttonDiv);