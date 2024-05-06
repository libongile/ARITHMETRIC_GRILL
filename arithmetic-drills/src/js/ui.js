// UI Module
const UI = (function() {
    const problemElement = document.getElementById('problem');
    const answerElement = document.getElementById('answer');
    const feedbackElement = document.getElementById('feedback');
    const scoreElement = document.getElementById('score-value');

    return {
        init: function() {
            // Initialization code
            answerElement.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    ArithmeticDrillsApp.checkAnswer();
                }
            });
        },

        displayProblem: function(problem) {
            problemElement.textContent = problem;
        },

        displayFeedback: function(feedback) {
            feedbackElement.textContent = feedback;
        },

        clearFeedback: function() {
            feedbackElement.textContent = '';
        },

        clearAnswer: function() {
            answerElement.value = '';
        },

        getAnswer: function() {
            return parseInt(answerElement.value);
        },

        getProblem: function() {
            return problemElement.textContent;
        },

        incrementScore: function() {
            let score = parseInt(scoreElement.textContent);
            score++;
            scoreElement.textContent = score;
        },

        resetScore: function() {
            scoreElement.textContent = '0';
        },

        getScore: function() {
            return parseInt(scoreElement.textContent);
        },

        displayCongratulations: function() {
            feedbackElement.textContent = "Congratulations! You've answered 10 questions correctly!";
        },
    };
})();
