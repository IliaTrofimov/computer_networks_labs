// ================================ OnLoad + Clock ================================
let dx = 1;
let x = 10;
document.addEventListener("DOMContentLoaded", () => {
    alert("Hello user!");
    setInterval(() => updateTime(), 100);
    let spam = document.getElementById("spam");
    setInterval(() => move(spam), 1);
})

function updateTime(){
    const now = new Date();
    const h = addZero(now.getHours());
    const m = addZero(now.getMinutes());
    const s = addZero(now.getSeconds());
    const ms = Math.floor(now.getMilliseconds() / 100);
    document.getElementById("clock").innerText = `${h}:${m}:${s}.${ms}`;
}

function addZero(value){
    return value >= 10 ? value : '0' + value;
}


// ================================ Calculator ================================
function validateForm(){
    const input_p1_x = document.forms["calculator"]["point1_x"].value;
    const input_p1_y = document.forms["calculator"]["point1_y"].value;
    const input_p2_x = document.forms["calculator"]["point2_x"].value;
    const input_p2_y = document.forms["calculator"]["point2_y"].value;
    const input_p3_x = document.forms["calculator"]["point3_x"].value;
    const input_p3_y = document.forms["calculator"]["point3_y"].value;

    const a = Math.sqrt(Math.pow(input_p1_x - input_p2_x, 2) + Math.pow(input_p2_y - input_p2_y, 2));
    const b = Math.sqrt(Math.pow(input_p2_x - input_p3_x, 2) + Math.pow(input_p2_y - input_p3_y, 2));
    const c = Math.sqrt(Math.pow(input_p1_x - input_p3_x, 2) + Math.pow(input_p1_y - input_p3_y, 2));
    const p = (a + b + c) / 2.0;

    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    document.body.innerHTML =
        `<div class="container">
            <div class="header">
                <h2>Площадь треугольника</h2>
            </div>
            <div class="items">
                <div class="item border-shadow" style="width: 400px">
                    <h4>Треугольник:</h4>
                    <div class="sub-header">
                        A = (${input_p1_x}, ${input_p1_y}), B = (${input_p2_x}, ${input_p2_y}), C = (${input_p3_x}, ${input_p3_y}) 
                    </div>
                    <h4>Результат:</h4>
                    <h5 class="sub-header"><i>S</i> = ${area} </h5>
                </div>
            </div>
        </div>
        <footer class="footer">
            <strong>Выполнил: </strong> Трофимов И.С., А-05-19
            <div class="sub-header"><a href="./index.html">Назад</a></div>
        </footer>`;
}

// ================================ Moving obj ================================
function move(spam){
    if (x >= window.screen.width - 400 || x <= 5){
        dx = -dx;
    }
    x += dx;
    spam.style.marginLeft = x + "px";
}
