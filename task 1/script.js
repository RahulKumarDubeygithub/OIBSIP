const output = document.getElementById('output');

function buttonClicked(value) {
    if (value === '=') {
        output.value = eval(output.value);
    } else {
        output.value += value;
    }
}

function clearOutput() {
    output.value = '';
}
