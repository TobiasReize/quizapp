let questions = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Bieber',
        'correct-answer': 3
    },
    {
        'question': 'Was bedeutet das HTML-tag <a>?',
        'answer_1': 'Text fett',
        'answer_2': 'Container',
        'answer_3': 'Ein Link',
        'answer_4': 'Text kursiv',
        'correct-answer': 3
    },
    {
        'question': 'Wie bindet man eine Website in eine Website ein?',
        'answer_1': '<iframe>, <frame> and <frameset>',
        'answer_2': '<iframe>',
        'answer_3': '<frame>',
        'answer_4': '<frameset>',
        'correct-answer': 2
    },
    {
        'question': 'Wie stellt man Text am BESTEN fett dar?',
        'answer_1': '<strong>',
        'answer_2': 'CSS nutzen',
        'answer_3': '<bold>',
        'answer_4': '<b>',
        'correct-answer': 1
    },
    {
        'question': 'Welches Attribut kann man NICHT für Textarea verwenden?',
        'answer_1': 'readonly',
        'answer_2': 'max',
        'answer_3': 'from',
        'answer_4': 'spellcheck',
        'correct-answer': 1
    },
    {
        'question': 'Wie wählst du alle Elemente vom Typ <a> mit dem Attribut title aus?',
        'answer_1': 'a[title] {...}',
        'answer_2': 'a > title {...}',
        'answer_3': 'a.title {...}',
        'answer_4': 'a = title {...}',
        'correct-answer': 1
    },
    {
        'question': 'Wie definiert man in JavaScript eine Variable?',
        'answer_1': 'let 100 = rate;',
        'answer_2': '100 = let rate',
        'answer_3': 'rate = 100;',
        'answer_4': 'let rate = 100;',
        'correct-answer': 4
    },
];
let answerOptions = ['A', 'B', 'C', 'D'];
let currentQuestion = 0;


function init() {

}


function showQuestions() {
    let question = questions[currentQuestion];
    let content = document.getElementById('main_section');
    content.innerHTML = /*html*/ `
        <span class="question-headline">${question['question']}</span>
        <div id="answer_list" class="d-grid gap-3"></div>
        <button>Nächste Frage</button>
    `;
    content.classList.add('bg-grey');

    for (let i = 0; i < 4; i++) {
        let answers = document.getElementById('answer_list');
        answers.innerHTML += /*html*/ `
            <div class="p-2 bg-light border d-flex align-items-center">
                <div class="answer-option fw-bolder d-flex align-items-center justify-content-center">${answerOptions[i]}</div>
                <span class="fw-semibold">${question[`answer_${i + 1}`]}</span>
            </div>
        `;
    }
}