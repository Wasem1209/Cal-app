const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let firstNumber = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('digit')) {
      currentInput += value;
      screen.textContent = currentInput;
    } else if (button.classList.contains('operator') && value !== '=' ) {
      operator = value;
      firstNumber = currentInput;
      currentInput = '';
    } else if (button.classList.contains('equals')) {
      if (firstNumber && operator && currentInput) {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(currentInput);
        let result = 0;
        switch(operator) {
          case '+': result = num1 + num2; break;
          case '−': result = num1 - num2; break;
          case '×': result = num1 * num2; break;
          case '÷': result = num1 / num2; break;
        }
        screen.textContent = result;
        currentInput = result;
        operator = '';
        firstNumber = '';
      }
    } else if (button.classList.contains('clear')) {
      currentInput = '';
      operator = '';
      firstNumber = '';
      screen.textContent = '0';
    }
  });
});