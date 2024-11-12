
// import { quizQuestions } from "./ques.js";

// document.addEventListener("DOMContentLoaded", function() {
//     const timerValue = document.querySelector(".timer-value");
//     const progressBar = document.querySelector(".quiz-progress");
//     const question = document.querySelector(".question");
//     const options = document.querySelector(".quiz-options");
//     const currentQues = document.querySelectorAll(".currentQ");
//     const totalQues = document.querySelector(".totalQ");
//     const summary = document.querySelector(".question-answer-container");
//     const innerContainer = document.querySelector(".inner-container");
//     const quizApp = document.querySelector(".quiz-app");
//     const finalScore = document.querySelector(".score");
//     const playbtn = document.querySelector(".playBtn");
//     const homepage = document.querySelector(".homepage");
//     const levelSelect = document.querySelector(".level-select");
//     const quesSelect = document.querySelector(".ques-select");
//     const reloadBtn = document.querySelector(".reloadBtn");

//     if (summary) summary.style.display = "none";

//     let questions;
//     let score = 0;
//     let timer = 0;
//     let currentTime = timer;
//     let currentQuesIndex = 0;
//     let totalMCQ = 0;
//     let quesTimer;

//     // Level select event listener
//     if (levelSelect) {
//         levelSelect.addEventListener('change', (e) => {
//             const selectedLevel = e.target.value;
//             timer = selectedLevel === "easy" ? 13 : selectedLevel === "medium" ? 7 : 4;
//         });
//     }

//     // Question select event listener
//     if (quesSelect) {
//         quesSelect.addEventListener('change', (e) => { 
//             totalMCQ = parseInt(e.target.value, 10);
//         });
//     }

//     // Start Game
//     function startGame() {
//         console.log("totalMCQ:", totalMCQ);
//         questions = randomQues(totalMCQ);
//         updateQues();

//         quesTimer = setInterval(() => {
//             if (timerValue) timerValue.innerText = currentTime;
//             if (currentTime === 1) {
//                 currentQuesIndex++;
//                 updateQues();
//             }
//             currentTime--;
//         }, 1000);
//     }

//     // Picking random questions
//     function randomQues(numberOfQuestions) {
//         let selectedQuestions = [];
//         for (let i = 0; i < numberOfQuestions; i++) {
//             const randomIndex = Math.floor(Math.random() * quizQuestions.length);
//             selectedQuestions.push(quizQuestions[randomIndex]);
//         }
//         console.log(selectedQuestions);
//         return selectedQuestions;
//     }

//     function updateQues() {
//         currentTime = timer;
//         if (currentQuesIndex >= totalMCQ) {
//             if (summary) summary.style.display = "block";
//             if (quizApp) quizApp.style.display = "none";
//             if (finalScore) finalScore.innerText = "Score: " + score + "/" + totalMCQ;

//             questions.forEach((question) => {
//                 summaryPage(question);
//             });

//             if (reloadBtn) {
//                 reloadBtn.addEventListener("click", () => {
//                     location.reload();
//                 });
//             }

//             clearInterval(quesTimer);
//         } else {
//             currentQues.forEach((ques) => {
//                 if (ques) ques.innerText = currentQuesIndex + 1;
//             });
//             if (totalQues) totalQues.innerText = questions.length;

//             const newQues = questions[currentQuesIndex];
//             if (question) question.innerText = newQues.Question;
//             if (options) options.innerHTML = "";

//             newQues.options.forEach((choice) => {
//                 const optionBtn = document.createElement("button");
//                 optionBtn.classList.add("quiz-option");

//                 const optionText = document.createElement("div");
//                 optionText.classList.add("quiz-option-text");
//                 optionText.innerText = choice;

//                 const optionImg = document.createElement("img");

//                 optionBtn.append(optionText, optionImg);
//                 optionBtn.addEventListener('click', (e) => {
//                     if (verifyOption(e, newQues.correctAns)) score++;
//                     options.querySelectorAll(".quiz-option").forEach((option) => option.disabled = true);
//                     currentQuesIndex++;
//                     setTimeout(updateQues, 500);
//                 });

//                 options.appendChild(optionBtn);
//             });
//         }

//         if (progressBar) progressBar.style.width = (currentQuesIndex / totalMCQ) * 100 + "%";
//     }

//     function verifyOption(event, answer) {
//         const selectedOption = event.currentTarget.innerText;
//         const isCorrect = selectedOption === answer;
//         event.currentTarget.classList.add(isCorrect ? "correct" : "wrong");
//         const icon = isCorrect ? "✅" : "❌" ; 

//         event.currentTarget.childNodes[1].src = `assets/${icon}`;
//         event.currentTarget.childNodes[1].classList.add("btn-img");
//         return isCorrect;
//     }

//     function summaryPage(question) {
//         const quesAnsContainer = document.createElement("div");
//         quesAnsContainer.classList.add("question-answer-inner-container");

//         const ques = document.createElement("h2");
//         ques.classList.add("quiz-question", "question");
//         ques.innerText = question.Question;

//         const ans = document.createElement("div");
//         ans.classList.add("quiz-answer", "quiz-option", "correct");
//         ans.innerText = question.correctAns;

//         quesAnsContainer.append(ques, ans);
//         if (innerContainer) innerContainer.appendChild(quesAnsContainer);
//         if (summary) summary.appendChild(innerContainer);
//     }

//     // Play button event listener
//     if (playbtn) {
//         playbtn.addEventListener('click', () => {
//             if (timer !== 0 && totalMCQ !== 0) {
//                 if (homepage) homepage.style.display = "none";
//                 if (quizApp) quizApp.style.display = "flex";
//                 startGame();
//             } else {
//                 alert("Please ensure both level and number of questions are selected.");
//             }
//         });
//     }
// });


import { quizQuestions } from "./ques.js";

document.addEventListener("DOMContentLoaded", function() {
    const timerValue = document.querySelector(".timer-value");
    const progressBar = document.querySelector(".quiz-progress");
    const question = document.querySelector(".question");
    const options = document.querySelector(".quiz-options");
    const currentQues = document.querySelectorAll(".currentQ");
    const totalQues = document.querySelector(".totalQ");
    const summary = document.querySelector(".question-answer-container");
    const innerContainer = document.querySelector(".inner-container");
    const quizApp = document.querySelector(".quiz-app");
    const finalScore = document.querySelector(".score");
    const playbtn = document.querySelector(".playBtn");
    const homepage = document.querySelector(".homepage");
    const levelSelect = document.querySelector(".level-select");
    const quesSelect = document.querySelector(".ques-select");
    const reloadBtn = document.querySelector(".reloadBtn");

    if (summary) summary.style.display = "none";

    let questions;
    let score = 0;
    let timer = 0;
    let currentTime = timer;
    let currentQuesIndex = 0;
    let totalMCQ = 0;
    let quesTimer;

    // Level select event listener
    if (levelSelect) {
        levelSelect.addEventListener('change', (e) => {
            const selectedLevel = e.target.value;
            timer = selectedLevel === "easy" ? 13 : selectedLevel === "medium" ? 7 : 4;
        });
    }

    // Question select event listener
    if (quesSelect) {
        quesSelect.addEventListener('change', (e) => { 
            totalMCQ = parseInt(e.target.value, 10);
        });
    }

    // Start Game
    function startGame() {
        console.log("totalMCQ:", totalMCQ);
        questions = randomQues(totalMCQ);
        updateQues();

        quesTimer = setInterval(() => {
            if (timerValue) timerValue.innerText = currentTime;
            if (currentTime === 1) {
                currentQuesIndex++;
                updateQues();
            }
            currentTime--;
        }, 1000);
    }

    // Picking random questions
    function randomQues(numberOfQuestions) {
        let selectedQuestions = [];
        for (let i = 0; i < numberOfQuestions; i++) {
            const randomIndex = Math.floor(Math.random() * quizQuestions.length);
            selectedQuestions.push(quizQuestions[randomIndex]);
        }
        console.log(selectedQuestions);
        return selectedQuestions;
    }

    function updateQues() {
        currentTime = timer;
        if (currentQuesIndex >= totalMCQ) {
            if (summary) summary.style.display = "block";
            if (quizApp) quizApp.style.display = "none";
            if (finalScore) finalScore.innerText = "Score: " + score + "/" + totalMCQ;

            questions.forEach((question) => {
                summaryPage(question);
            });

            if (reloadBtn) {
                reloadBtn.addEventListener("click", () => {
                    location.reload();
                });
            }

            clearInterval(quesTimer);
        } else {
            currentQues.forEach((ques) => {
                if (ques) ques.innerText = currentQuesIndex + 1;
            });
            if (totalQues) totalQues.innerText = questions.length;

            const newQues = questions[currentQuesIndex];
            if (question) question.innerText = newQues.Question;
            if (options) options.innerHTML = "";

            newQues.options.forEach((choice) => {
                const optionBtn = document.createElement("button");
                optionBtn.classList.add("quiz-option");

                const optionText = document.createElement("div");
                optionText.classList.add("quiz-option-text");
                optionText.innerText = choice;

                const optionEmoji = document.createElement("span");
                optionEmoji.classList.add("option-emoji");

                optionBtn.append(optionText, optionEmoji);
                optionBtn.addEventListener('click', (e) => {
                    if (verifyOption(e, newQues.correctAns)) score++;
                    options.querySelectorAll(".quiz-option").forEach((option) => option.disabled = true);
                    currentQuesIndex++;
                    setTimeout(updateQues, 500);
                });

                options.appendChild(optionBtn);
            });
        }

        if (progressBar) progressBar.style.width = (currentQuesIndex / totalMCQ) * 100 + "%";
    }

    function verifyOption(event, answer) {
        const selectedOption = event.currentTarget.querySelector(".quiz-option-text").innerText;
        const isCorrect = selectedOption === answer;
        event.currentTarget.classList.add(isCorrect ? "correct" : "wrong");
        const icon = isCorrect ? "✅" : "❌";
        
        // Display emoji in the option button
        const optionEmoji = event.currentTarget.querySelector(".option-emoji");
        optionEmoji.innerText = icon;
        
        return isCorrect;
    }

    function summaryPage(question) {
        const quesAnsContainer = document.createElement("div");
        quesAnsContainer.classList.add("question-answer-inner-container");

        const ques = document.createElement("h2");
        ques.classList.add("quiz-question", "question");
        ques.innerText = question.Question;

        const ans = document.createElement("div");
        ans.classList.add("quiz-answer", "quiz-option", "correct");
        ans.innerText = question.correctAns;

        quesAnsContainer.append(ques, ans);
        if (innerContainer) innerContainer.appendChild(quesAnsContainer);
        if (summary) summary.appendChild(innerContainer);
    }

    // Play button event listener
    if (playbtn) {
        playbtn.addEventListener('click', () => {
            if (timer !== 0 && totalMCQ !== 0) {
                if (homepage) homepage.style.display = "none";
                if (quizApp) quizApp.style.display = "flex";
                startGame();
            } else {
                alert("Please ensure both level and number of questions are selected.");
            }
        });
    }
});
