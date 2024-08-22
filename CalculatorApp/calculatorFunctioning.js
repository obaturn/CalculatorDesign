const display = document.getElementById('display');

function appendToDisplay(input) {
    const currentInput = display.value;

    // Prevent multiple dots in the same number
    if (input === '.' && currentInput.includes('.')) {
        return;
    }

    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Avoid evaluating if display is empty or ends with an operator
        if (display.value && !/[+\-*/]$/.test(display.value)) {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "";
    }
}
