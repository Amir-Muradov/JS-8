let number = prompt("Write the number")

function calcmoney(inputNumber) {
    let azn500 = 0;
    let azn200 = 0;
    let azn100 = 0;
    let azn50 = 0;
    let azn20 = 0;
    let azn10 = 0;
    let azn5 = 0;
    let azn1 = 0;

    while (inputNumber >= 500) {
        inputNumber = inputNumber - 500;
        azn500++;
    }
    while (inputNumber >= 200) {
        inputNumber = inputNumber - 200;
        azn200++;
    }
    while (inputNumber >= 100) {
        inputNumber = inputNumber - 100;
        azn100++;
    }
    while (inputNumber >= 50) {
        inputNumber = inputNumber - 50;
        azn50++;
    }
    while (inputNumber >= 20) {
        inputNumber = inputNumber - 20;
        azn20++;
    }
    while (inputNumber >= 10) {
        inputNumber = inputNumber - 10;
        azn10++;
    }
    while (inputNumber >= 5) {
        inputNumber = inputNumber - 5;
        azn5++;
    }
    while (inputNumber >= 1) {
        inputNumber = inputNumber - 1;
        azn1++;
    }
}