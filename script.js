function alertFromArea() {
    let inputAreaValue = document.getElementById('inputArea').value;
    if (inputAreaValue === 'google') {
        alert('яндекс круче, но это не точно')
    } else {
        alert(inputAreaValue);
    }

}

document.getElementById('inputButton').addEventListener('click', alertFromArea);
// задание 5
let arrayPeople = [];
arrayPeople[0] = {
    name: 'Tom',
    age: 30,
};
arrayPeople[1] = {
    name: 'Jay',
    age: 20,
};
arrayPeople[2] = {
    name: 'Tamy',
    age: 22,
};

// задание 6
function superSum() {
    let firstNum = prompt('first num', '');
    let secondNum = prompt('second num', '');
    let sum = (+firstNum) + (+secondNum);
    alert('sum = ' + sum);
}

document.getElementById('functionSum').addEventListener('click', superSum);

// задание 7, 9, 10




findMax = () => {
    let getNum = document.getElementById('array_input_area').value;
    let newNumArray = getNum.split(',');
    let convertToNum = newNumArray.map(function(item) {
        return +item;
    });
    let bigValue = convertToNum[0];
    for (let i = 0, len = convertToNum.length; i < len; i++) {
        let j = i + 1;
            if (convertToNum[i] > convertToNum[j] && convertToNum[i] > bigValue) {
                bigValue = convertToNum[i];
            } else if (convertToNum[j] > convertToNum[i] && convertToNum[j] > bigValue){
                bigValue = convertToNum[j]
            }
    }
    alert(bigValue);
};

showResultFindMax = () => {
    let getSec = document.getElementById('time_input_area').value;
    setTimeout(function () {
        findMax();
    }, getSec * 1000);

};

document.getElementById('array_input_button').addEventListener('click', showResultFindMax);

// задание 8

let div1 = document.createElement('div');
let div2 = document.createElement('div');

function revertValue() {
    let a = document.getElementById('inputArea_A').value;
    let b = document.getElementById('inputArea_B').value;
    let c = b;
    b = a;
    a = c;
    div1 = outputArea_A.cloneNode(true);
    div1.querySelector('p').innerHTML = a;
    outputArea_A.after(div1);
    div2 = outputArea_B.cloneNode(true);
    div2.querySelector('p').innerHTML = b;
    outputArea_B.after(div2);
}
function removeValue (){
    div1.remove();
    div2.remove();
}
document.getElementById('input_button_task_4').addEventListener('click', revertValue);
document.getElementById('reset_button_task_4').addEventListener('click', removeValue);

let task_1_show_code = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";