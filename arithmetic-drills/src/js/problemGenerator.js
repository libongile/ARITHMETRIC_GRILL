// Problem Generation Module
const ProblemGenerator = (function() {
    const operators = ['+', '-', '×', '÷'];

    return {
        generateProblem: function() {
            const operator = operators[Math.floor(Math.random() * operators.length)];
            let num1, num2;

            switch (operator) {
                case '+':
                    num1 = Math.floor(Math.random() * 50);
                    num2 = Math.floor(Math.random() * 50);
                    break;
                case '-':
                    num1 = Math.floor(Math.random() * 50);
                    num2 = Math.floor(Math.random() * 50);
                    break;
                case '×':
                    num1 = Math.floor(Math.random() * 12) + 1;
                    num2 = Math.floor(Math.random() * 12) + 1;
                    break;
                case '÷':
                    num1 = Math.floor(Math.random() * 12) + 1;
                    num2 = Math.floor(Math.random() * 12) + 1;
                    break;
            }

            return `${num1} ${operator} ${num2}`;
        },

        calculateAnswer: function(problem) {
            const [num1, operator, num2] = problem.split(' ');
            switch (operator) {
                case '+':
                    return parseInt(num1) + parseInt(num2);
                case '-':
                    return parseInt(num1) - parseInt(num2);
                case '×':
                    return parseInt(num1) * parseInt(num2);
                case '÷':
                    return parseInt(num1) / parseInt(num2);
            }
        },

        reset: function() {
            // Reset any necessary variables
        }
    };
})();
