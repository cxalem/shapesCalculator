const square = document.getElementById('square');
const triangle = document.getElementById('triangle');
const circle = document.getElementById('circle');
const squareSideA = document.getElementById('sideA');
const squareSideB = document.getElementById('sideB');
const triangleSideA = document.getElementById('triangleSideA');
const triangleBase = document.getElementById('triangleBase');
const triangleSideC = document.getElementById('triangleSideC');
const circleRadius = document.getElementById('circleRadius');
const triangleHeight = document.getElementById('triangleHeight');
const result = document.getElementById('squareResult');
const shapesContainer = document.querySelector('.shapesContainer');
const squareCalculatorContainer = document.querySelector('.squareCalculatorContainer');
const triangleCalculatorContainer = document.querySelector('.triangleCalculatorContainer');
const circleCalculatorContainer = document.querySelector('.circleCalculatorContainer');
const triangleResult = document.getElementById('triangleResult');
const shapesSelection = document.querySelector('.shapesSelection');
const circleResult = document.getElementById('circleResult');

function getSquareArea() {
    let a = squareSideA.value;
    let b = squareSideB.value;
    result.innerText = `Área: ${a*b}`;
    result.style.display = 'flex';
}

function getSquarePerimeter() {
    let a = Number(squareSideA.value);
    let b = Number(squareSideB.value);
    result.innerText = `Perímetro: ${(a*2)+(b*2)}`;
    result.style.display = 'flex';
}

function getTrianglePerimeter() {
    let a = triangleSideA.value;
    let b = triangleBase.value;
    let c = triangleSideC.value;
    triangleResult.innerText = `Perímetro: ${Number(a) + Number(b) + Number(c)}`;
    triangleResult.style.display = 'flex';
}

function getTriangleArea() {
    let b = Number(triangleBase.value);
    let h = Number(triangleHeight.value);
    triangleResult.innerText = `Área: ${(b * h)/2}`;
    triangleResult.style.display = 'flex';
}

function getCircleDiameter() {
    let r = Number(circleRadius.value);
    circleResult.innerText = `Diámetro: ${r*2}`;
    circleResult.style.display = 'flex';
}

function getCirclePerimeter() {
    let r = Number(circleRadius.value);
    const PI = Math.PI;
    circleResult.innerText = `Perímetro: ${2*PI*r}`;
    circleResult.style.display = 'flex';;
}

function getCircleArea() {
    let r = Number(circleRadius.value);
    const PI = Math.PI;
    circleResult.innerText = `Área: ${PI*r**2}`;
    circleResult.style.display = 'flex';;
}

shapesContainer.addEventListener('click', e => {
    if (e.target == square) {
        squareCalculatorContainer.style.display = 'flex';
        triangleCalculatorContainer.style.display = 'none';
        circleCalculatorContainer.style.display = 'none';
    }
    else if (e.target == triangle) {
        triangleCalculatorContainer.style.display = 'flex';
        squareCalculatorContainer.style.display = 'none';
        circleCalculatorContainer.style.display = 'none';
        shapesSelection.style.height = 'fit-content';
    }
    else if (e.target == circle) {
        circleCalculatorContainer.style.display = 'flex';
        squareCalculatorContainer.style.display = 'none';
        triangleCalculatorContainer.style.display = 'none';   
    }
})

