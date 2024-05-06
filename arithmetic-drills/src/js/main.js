// Main Module
const ArithmeticDrillsApp = (function() {
    // Initialization, restart, display problem, display feedback functions
    const init = function() {
        UI.init();
        displayProblem();
    };

    const checkAnswer = function() {
        const userInput = UI.getAnswer();
        const problem = UI.getProblem();
        const correctAnswer = ProblemGenerator.calculateAnswer(problem);
    
        if (userInput === correctAnswer) {
            UI.displayFeedback("Correct!");
            UI.incrementScore();
        } else {
            UI.displayFeedback(`Incorrect. The correct answer is ${correctAnswer}.`);
        }
    
        // Clear the answer tab
        UI.clearAnswer();
    
        if (UI.getScore() === 10) {
            UI.displayCongratulations();
            return; // Stop further execution if the score reaches 10
        }
    
        // Display next problem after a short delay
        setTimeout(displayProblem, 1000);
    };
    

    const restart = function() {
        ProblemGenerator.reset();
        UI.clearFeedback();
        UI.clearAnswer();
        UI.resetScore();
        displayProblem();
    };

    const displayProblem = function() {
        const problem = ProblemGenerator.generateProblem();
        UI.displayProblem(problem);
    };

    return {
        init: init,
        checkAnswer: checkAnswer,
        restart: restart
    };
})();

// Initialize the application
ArithmeticDrillsApp.init();
