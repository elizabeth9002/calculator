
// Initialize the calculator display
let calcDisplay = '0';

// Function to update the display
function updateDisplay(value) {
    if (calcDisplay === '0' || calcDisplay === 'Error') {
        calcDisplay = value;
    } else {
        calcDisplay += value;
    }
    document.getElementById("calctyped").textContent = calcDisplay;
}

// Function to clear the display
function clearDisplay() {
    calcDisplay = '0';
    document.getElementById("calctyped").textContent = calcDisplay;
    document.getElementById("calcoperation").textContent = '';
}

// Function to calculate and display the result
function calculateResult() {
    try {
        const result = eval(calcDisplay);
        document.getElementById("calcoperation").textContent = calcDisplay;
        document.getElementById("calctyped").textContent = result;
        calcDisplay = result.toString();
    } catch (error) {
        document.getElementById("calctyped").textContent = 'Error';
        calcDisplay = 'Error';
    }
}

// Function to handle numerical symbols
function handleNumericalSymbol(symbol) {
    if (calcDisplay !== '0' && calcDisplay !== 'Error') {
        if (symbol === '%') {
            // Handle percent
            const value = parseFloat(calcDisplay) / 100;
            calcDisplay = value.toString();
        } else if (symbol === '/') {
            // Handle division
            calcDisplay += '/';
        } else if (symbol === '*') {
            // Handle multiplication
            calcDisplay += '*';
        } else {
            updateDisplay(symbol);
        }
    }
}

// Function to delete the last character
function deleteLast() {
    if (calcDisplay !== '0' && calcDisplay !== 'Error') {
        calcDisplay = calcDisplay.slice(0, -1);
        if (calcDisplay === '') {
            calcDisplay = '0';
        }
        document.getElementById("calctyped").textContent = calcDisplay;
    }
}

// Attach click event listeners to the buttons
document.querySelectorAll('.btnRowCstm button').forEach(button => {
    button.addEventListener('click', function () {
        const buttonText = button.textContent;

        if (!isNaN(buttonText) || buttonText === '.') {
            updateDisplay(buttonText);
        } else if (buttonText === 'A/C') {
            clearDisplay();
        } else if (buttonText === '=') {
            calculateResult();
        } else if (buttonText === 'Del') {
            deleteLast();
        } else {
            handleNumericalSymbol(buttonText);
        }
    });
});

// Attach click event listeners to the buttons in the original code
document.getElementById("ac").addEventListener("click", clearDisplay);
document.getElementById("signChange").addEventListener("click", changeSign);

// Function to change the sign of the number
function changeSign() {
    const calctyped = document.getElementById("calctyped").textContent;
    if (calctyped !== '0' && calctyped !== 'Error') {
        if (calctyped[0] === '-') {
            document.getElementById("calctyped").textContent = calctyped.slice(1);
        } else {
            document.getElementById("calctyped").textContent = '-' + calctyped;
        }
    }
}
