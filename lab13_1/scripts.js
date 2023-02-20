function roundTo(x,){
    return Math.round( ( x + Number.EPSILON ) * 100 ) / 100
}

const FIGURES = [
    ["Прямоугольник", ["ширина", "длинна"], (params) => roundTo(params[0] * params[1])],
    ["Круг", ["радиус"], (params) => roundTo(Math.pow(params[0],2) * Math.PI, 2)],
    ["Круг", ["диаметр"], (params) => roundTo(Math.pow(params[0],2) * Math.PI / 4)],
    ["Правильный треугольник", ["сторона"], (...params) => roundTo(Math.pow(params[0],2) * Math.sqrt(3) / 4)]
]
const QUESTIONS = 3;
const TIME = 2*60*1000;
let timerId = 0;
let timeoutId = 0;

function startTest(){
    document.getElementById("questions").innerHTML = "";
    document.getElementById("btn-start").disabled = true;
    document.getElementById("result").innerHTML = "";
    createQuestions();

    let now = Date.now();
    let timer = document.getElementById("time");

        timeoutId = setTimeout(() => {alert("Время вышло!"); endTest()}, TIME);
    timerId = setInterval(() => timer.innerText = getTimeStr(TIME - (Date.now() - now)), 500)
}

function getTimeStr(ms){
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms - minutes * 60000) / 1000);
    return `${minutes} минут ${seconds} секунд`
}

function createQuestions(){
    let html = "<i>Округление до 2 знаков после запятой</i>";
    for (let i = 0; i < QUESTIONS; i++){
        let fig = FIGURES[Math.floor(Math.random() * 3)];
        let params =  fig[1].length == 2 ?
            [Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1] :
            [Math.floor(Math.random() * 20) + 1];
        let answer = fig[2](params);

        html +=
            `<div class="question">
                <div>
                    <strong>${fig[0]}:</strong> ${fig[1].join(", ")} = ${params.slice(0, params.length).join(", ")}
                   </div>
                <div id="q_${i}">
                    <strong >Площадь</strong>: <input id="a_${i}" type="number">
                    <label hidden id="r_${i}">${answer}</label>
                </div>
            </div>`;
    }

    html += `<div class="sub-header"><button class="btn-primary" onclick="endTest()">Проверить</button></div>`;
    document.getElementById("questions").innerHTML = html;
}

function endTest(){
    clearTimeout(timeoutId);
    clearInterval(timerId);
    document.getElementById("btn-start").disabled = false;
    document.getElementById("btn-start").innerText = "Начать заново";

    let count = 0;

    for (let i = 0; i < QUESTIONS; i++){
        if (document.getElementById(`a_${i}`).value == document.getElementById(`r_${i}`).innerHTML){
            document.getElementById(`q_${i}`).style.color = "green";
            count++;
        }
        else{
            document.getElementById(`q_${i}`).style.color = "red";
        }
    }

    document.getElementById("result").innerText = `Правильных ответов: ${Math.floor(count / QUESTIONS * 100)}%`;
}