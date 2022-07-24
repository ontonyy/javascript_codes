
var total, oldSymbol;
var answerChange = false;

var input = document.getElementById("input");
var totalText = document.getElementById("total");
var checkBox = document.querySelector('#checkbox');

var buttons = document.getElementsByTagName("button");
var texts = document.getElementsByTagName("h1");

listenCheckBox();
input.value = "";

function listenCheckBox() {
    checkBox.addEventListener('change', function () {
        if (this.checked) {
            setSpecialCss();
            console.log("Set specific style");
        } else {
            window.location.reload();
            console.log("Default, without CSS")
        }
    });
}

function setOperation() {
    if (input.value !== "") {
        if (isNaN(total)) {
            total = +(input.value);
        } else {
            var num = +(input.value);
            console.log("choose: " + oldSymbol + ", " + num);
            chooseOperation(oldSymbol, num);
        }
    }
}

function displaySymbol(symbol) {
    if (!containsSymbol()) {
        setOperation();
        input.value = symbol;
    }
    oldSymbol = symbol;
}

function chooseOperation(symbol, number) {
    switch (symbol) {
        case "+":
            total = total + number;
            break;
        case "-":
            total = total - number;
            break;
        case "/":
            total = total / number;
            break;
        case "*":
            total = total * number;
            break;
    }
}

function displayDot() {
    if (!input.value.includes(".") && !containsSymbol()) {
        input.value += ".";
    }
}

function displayNum(num) {
    if (containsSymbol() || answerChange) {
        input.value = "";
        answerChange = false;
    }

    if (input.value.substring(0, 1) === "0") {
        input.value = num;
    } else {
        input.value += num;
    }
}

function getAnswer() {
    setOperation();
    var strTotal = String(total);
    if (strTotal.includes(".")) {
        strTotal = String(total.toFixed(2));
    }
    input.value = strTotal;
    totalText.innerHTML = "Total: " + strTotal;
    answerChange = true;
    total = NaN;
}

function clearAll() {
    total = NaN;
    input.value = "";
    totalText.innerHTML = "Total: " + "nothing, and i'm tired..."
}

function containsSymbol() {
    return /^[\+,\-,\/,\*]/.test(input.value);
}

function setSpecialCss() {
    document.body.style.backgroundImage = "linear-gradient(43deg, #41d9f4 0%, #f862ee 46%, #ef8d31 100%)";

    // buttons style
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.width = "20vh";
        buttons[i].style.height = "10vh";
        buttons[i].style.border = "10px";
        buttons[i].style.borderRadius = "5px";
        buttons[i].style.backgroundColor = "rgba(255, 255, 255, .4)";
        buttons[i].style.fontSize = "15px";
        buttons[i].style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    }

    // h1 style
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.fontFamily = "'Prompt', sans-serif";
        texts[i].style.color = "rgba(255, 255, 255, 0.8)";
        texts[i].style.fontSize = "40px";
    }

    // input[text] style
    input.style.width = "60vh";
    input.style.height = "10vh";
    input.style.textAlign = "right";
    input.style.border = "10px";
    input.style.borderRadius = "5px";
    input.style.backgroundColor = "rgba(0, 255, 255, 0.45)";
    input.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    input.style.fontSize = "x-large";
}