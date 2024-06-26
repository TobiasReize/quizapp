let questions = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer-1': 'Robbie Williams',
        'answer-2': 'Lady Gaga',
        'answer-3': 'Tim Berners-Lee',
        'answer-4': 'Justin Bieber',
        'correct-answer': 3
    },
    {
        'question': 'Was bedeutet das HTML-tag &lt;a&gt;?',
        'answer-1': 'Text fett',
        'answer-2': 'Container',
        'answer-3': 'Ein Link',
        'answer-4': 'Text kursiv',
        'correct-answer': 3
    },
    {
        'question': 'Wie bindet man eine Website in eine Website ein?',
        'answer-1': '&lt;iframe&gt;, &lt;frame&gt; and &lt;frameset&gt;',
        'answer-2': '&lt;iframe&gt;',
        'answer-3': '&lt;frame&gt;',
        'answer-4': '&lt;frameset&gt;',
        'correct-answer': 2
    },
    {
        'question': 'Wie stellt man Text am BESTEN fett dar?',
        'answer-1': '&lt;strong&gt;',
        'answer-2': 'CSS nutzen',
        'answer-3': '&lt;bold&gt;',
        'answer-4': '&lt;b&gt;',
        'correct-answer': 1
    },
    {
        'question': 'Welches Attribut kann man NICHT für Textarea verwenden?',
        'answer-1': 'readonly',
        'answer-2': 'max',
        'answer-3': 'from',
        'answer-4': 'spellcheck',
        'correct-answer': 1
    },
    {
        'question': 'Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem Attribut title aus?',
        'answer-1': 'a[title] {...}',
        'answer-2': 'a > title {...}',
        'answer-3': 'a.title {...}',
        'answer-4': 'a = title {...}',
        'correct-answer': 1
    },
    {
        'question': 'Wie definiert man in JavaScript eine Variable?',
        'answer-1': 'let 100 = rate;',
        'answer-2': '100 = let rate;',
        'answer-3': 'rate = 100;',
        'answer-4': 'let rate = 100;',
        'correct-answer': 4
    },
];
let answerOptions = ['A', 'B', 'C', 'D'];
let currentQuestion = 0;
let correctAnswers = 0;


function showQuestions() {
    let question = questions[currentQuestion];
    let content = document.getElementById('main_section');
    content.innerHTML = questionsLayoutHTML(question);
    content.classList.add('bg-grey');
    answersHTML(question);
}


function questionsLayoutHTML(question) {
    return /*html*/ `
        <span class="question-headline">${question['question']}</span>
        <div id="answer_list" class="d-grid gap-3"></div>
        <div class="number-questions">Frage <strong>${currentQuestion + 1}</strong> von <strong>${questions.length}</strong></div>
        <button id="custom_button" type="button" class="btn btn-primary" disabled onclick="nextQuestion()">Nächste Frage</button>
    `;
}


function answersHTML(question) {
    for (let i = 0; i < 4; i++) {
        let answers = document.getElementById('answer_list');
        answers.innerHTML += /*html*/ `
            <div id="answer_${i}" class="p-2 bg-light border d-flex align-items-center" onclick="checkAnswer(${i + 1})">
                <div id="answer_option_${i}" class="answer-option fw-bolder d-flex align-items-center justify-content-center">${answerOptions[i]}</div>
                <span class="fw-semibold">${question[`answer-${i + 1}`]}</span>
            </div>
        `;
    }
}


function checkAnswer(answerSelection) {
    let correctAnswerNumber = questions[currentQuestion]['correct-answer'];
    let correctAnswerContainer = document.getElementById(`answer_${correctAnswerNumber - 1}`);
    let correctAnswerOption = document.getElementById(`answer_option_${correctAnswerNumber - 1}`);
    let selectedAnswerContainer = document.getElementById(`answer_${answerSelection - 1}`);
    let selectedAnswerOption = document.getElementById(`answer_option_${answerSelection - 1}`);
    let nextQuestionButton = document.getElementById('custom_button');
    if (answerSelection == correctAnswerNumber) {
        answerIsCorrect(correctAnswerContainer, correctAnswerOption, nextQuestionButton);
    } else {
        answerIsFalse(selectedAnswerContainer, selectedAnswerOption, correctAnswerContainer, correctAnswerOption, nextQuestionButton);
    }
}


function answerIsCorrect(correctAnswerContainer, correctAnswerOption, nextQuestionButton) {
    correctAnswerContainer.classList.remove('bg-light');
    correctAnswerContainer.classList.add('correct-answer');
    correctAnswerOption.classList.add('correct-answer-option');
    nextQuestionButton.disabled = false;
    correctAnswers++;
    disableAnswers();
}


function answerIsFalse(selectedAnswerContainer, selectedAnswerOption, correctAnswerContainer, correctAnswerOption, nextQuestionButton) {
    selectedAnswerContainer.classList.remove('bg-light');
    selectedAnswerContainer.classList.add('false-answer');
    selectedAnswerOption.classList.add('false-answer-option');
    correctAnswerContainer.classList.remove('bg-light');
    correctAnswerContainer.classList.add('correct-answer');
    correctAnswerOption.classList.add('correct-answer-option');
    nextQuestionButton.disabled = false;
    disableAnswers();
}


function disableAnswers() {
    for (let i = 0; i < 4; i++) {
        document.getElementById(`answer_${i}`).onclick = null;
    }
}


function nextQuestion() {
    if (currentQuestion + 1 == questions.length) {
        showResultHTML();
    } else if (currentQuestion + 1 == questions.length - 1) {
        currentQuestion++;
        showQuestions();
        document.getElementById('custom_button').innerHTML = 'Resultat anzeigen';
    } else {
        currentQuestion++;
        showQuestions();
    }
}


function showResultHTML() {
    let content = document.getElementById('main_section');
    content.innerHTML = /*html*/ `
        <img class="result-img" src="./Layout-dark/brain result.png" alt="result">
        <span class="font-style mg-tp-bt">COMPLETE<br>HTML QUIZ</span>
        <span class="font-style font-color-orange">YOUR SCORE   ${correctAnswers}/${questions.length}</span>
        <button id="share_button" type="button" class="btn btn-primary">SHARE</button>
        <button id="replay_button" type="button" class="btn btn-primary" onclick="location.reload()">REPLAY</button>
    `;
}