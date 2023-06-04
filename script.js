
const quizData = [
    {
        question: "We use the HTML language in : ",
        a: "web",
        b: "applications",
        c: "iPhone applications",
        d: "desktop applications",
        correct: "a"
    },
    {
        question: "what does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Simple Sheets",
        c: "Cars SUVs Sailboats",
        d: "Cascading Style Sheets",
        correct: "d"
    },
    {
        question: "to do unordered list we use?",
        a: "li",
        b: "ul",
        c: "tr",
        d: "ol",
        correct: "b"
    },
    {
        question: "What is the tag used to add a header in an HTML5 table?",
        a: "th",
        b: "tr",
        c: "table",
        d: "td",
        correct: "a"
    },
    {
        question: "Which of the following attributes is used to open the link in a new tab?",
        a: "href",
        b: "a",
        c: "_blank",
        d: "new-tab",
        correct: "c"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markdown Language",
        b: "Helicopters Terminals Motorboats Lamborginis",
        c: "Hypertext Markup Language",
        d: "Hyperloop Machine Language",
        correct: "c"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1990",
        correct: "b"
    }
]
let quiz = 0
let score = 0
let quizHead = document.querySelector(".quiz-head")
let mainQuiz = quizHead
const question = document.getElementById("question")
const a_ans = document.getElementById("a_ans") 
const b_ans = document.getElementById("b_ans") 
const c_ans = document.getElementById("c_ans") 
const d_ans = document.getElementById("d_ans") 
const submit = document.getElementById("submit")
const answerEls = document.querySelectorAll(".ans")
const unset = document.getElementById("unset")
const reloadBtn = document.querySelector(".reloadBtn")

startQuiz()

unset.addEventListener("click", unselectAns)
function unselectAns() {
    for (let i = 0; i < answerEls.length; i++) {
            answerEls[i].checked = false
    }
}
function startQuiz () {
    unselectAns()
    question.innerText = quizData[quiz].question
    a_ans.innerText = quizData[quiz].a
    b_ans.innerText = quizData[quiz].b
    c_ans.innerText = quizData[quiz].c
    d_ans.innerText = quizData[quiz].d

}
function selectedAns () {
    let answer
    for (let i = 0; i < answerEls.length; i++) {
        if(answerEls[i].checked) {
            answer = answerEls[i].id
        }
    }
    return answer
}
submit.addEventListener("click", function () {
    const answer = selectedAns()
    if(answer) {
        if(answer === quizData[quiz].correct) {
            score++
        }
        quiz++
        if(quiz >= quizData.length) {
            quizHead.innerHTML = `
                <h2 class="end">You answered ${score}/${quizData.length} questions Correctly</h2>
            `
        } else {
            startQuiz()
        }
    }
})
