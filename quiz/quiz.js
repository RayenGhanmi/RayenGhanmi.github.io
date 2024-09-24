const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"]
    },
    {
        question: "What is 2 + 2?",
        answers: ["4", "3", "5", "6"]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Jupiter", "Mars", "Earth", "Venus"]
    },
    {
        question: "What is the speed of light?",
        answers: ["299,792,458 m/s", "150,000,000 m/s", "300,000 km/s", "299,792 km/s"]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: ["H2O", "O2", "CO2", "H2"]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: ["Diamond", "Gold", "Iron", "Silver"]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: ["Oxygen", "Hydrogen", "Osmium", "Oganesson"]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: ["Japan", "China", "South Korea", "Thailand"]
    }
];

let score = 0;

// Shuffle function to randomize answers
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Load quiz questions
function loadQuiz() {
    const quizQuestionsDiv = document.getElementById('quiz-questions');
    quizQuestionsDiv.innerHTML = ''; // Clear any previous content

    questions.forEach((q, index) => {
        const shuffledAnswers = shuffle([...q.answers]); // Randomize answers

        // Generate HTML for each question
        let questionBlock = `
            <div class="question">
                <h3>${q.question}</h3>`;

        shuffledAnswers.forEach((answer) => {
            questionBlock += `
                <label>
                    <input type="radio" name="question${index}" value="${answer}">
                    ${answer}
                </label>`;
        });

        questionBlock += `</div>`;
        quizQuestionsDiv.innerHTML += questionBlock;
    });
}

// Check answers and display results
function checkAnswers() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const resultMessage = document.getElementById('result-message');
    const resultScore = document.getElementById('result-score');
    score = 0;

    // Validate answers
    questions.forEach((q, index) => {
        const userAnswer = form[`question${index}`].value;
        if (userAnswer === q.answers[0]) { // Check if the selected answer is correct
            score += 10; // Each correct answer adds 10 points
        }
    });

    // Hide the quiz form and display the result
    form.style.display = 'none';
    resultDiv.style.display = 'block'; // Show result div

    // Set the result message and score
    if (score >= 70) {
        resultMessage.textContent = "Congratulations, you passed!";
    } else {
        resultMessage.textContent = "Better luck next time!";
    }

    resultScore.textContent = `Your score is: ${score}/100`;
}

// Load quiz on page load
document.addEventListener('DOMContentLoaded', loadQuiz);
