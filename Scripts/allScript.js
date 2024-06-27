let userscore = 0;
let questionCount = 1;
document.addEventListener("DOMContentLoaded", async function () {
    const questionHolder = document.querySelector('.question');
    const headerscoretext = document.querySelector('.score');
    const nextbtn = document.querySelector('.next');
    const btn = document.querySelector('.btn')
    const inputBox = document.querySelector('.input-box');
    const char = document.querySelector('.char');
    const left = document.querySelector('.left');
    const questionsLength = 36;
    let userAnswer;
    let random;
    let finalQuestions = [];
    let finalRandom;

    function getData() {

        finalQuestions.splice(0, finalQuestions.length);
        for (let i = 0; i < questionsLength / 18; i++) {
            random = Math.floor(Math.random() * addFour.length);

            finalQuestions.push(addFour[random]);
            finalQuestions.push(addThree[random]);
            finalQuestions.push(addTwo[random]);
            finalQuestions.push(addOne[random]);
            addFour.splice(random, 1);
            addThree.splice(random, 1);
            addTwo.splice(random, 1);
            addOne.splice(random, 1);

            finalQuestions.push(divideFour[random]);
            finalQuestions.push(divideThree[random]);
            finalQuestions.push(divideTwo[random]);
            finalQuestions.push(divideOne[random]);
            divideFour.splice(random, 1);
            divideThree.splice(random, 1);
            divideTwo.splice(random, 1);
            divideOne.splice(random, 1);

            finalQuestions.push(multiplyFour[random]);
            finalQuestions.push(multiplyThree[random]);
            finalQuestions.push(multiplyTwo[random]);
            finalQuestions.push(multiplyOne[random]);
            multiplyFour.splice(random, 1);
            multiplyThree.splice(random, 1);
            multiplyTwo.splice(random, 1);
            multiplyOne.splice(random, 1);

            finalQuestions.push(subtractFour[random]);
            finalQuestions.push(subtractThree[random]);
            finalQuestions.push(subtractTwo[random]);
            finalQuestions.push(subtractOne[random]);
            subtractFour.splice(random, 1);
            subtractThree.splice(random, 1);
            subtractTwo.splice(random, 1);
            subtractOne.splice(random, 1);

            finalQuestions.push(power[random]);
            finalQuestions.push(roots[random]);
            power.splice(random, 1);
            roots.splice(random, 1);

        }
    }

    function finalQ() {
        if (finalQuestions.length >= 1) {
            random = Math.floor(Math.random() * finalQuestions.length);
            finalRandom = random;
            questionHolder.innerHTML = `<p>${finalQuestions[random].q}</p>`;
        } else {
            headerscoretext.classList.add('active');
            questionHolder.classList.add('active');
            inputBox.classList.add('active');
            char.classList.add('active');
            btn.classList.add('active');
            nextbtn.textContent = 'Back to home';
            nextbtn.onclick = () => {
                location.href = '../exams.html';
            }

            if (userscore > questionsLength / 2) {
                char.src = '../../Images/Happy.png';
            } else if (userscore < questionsLength / 2) {
                char.src = '../../Images/Mad.png';
            } else {
                char.src = '../../Images/Idle.png';
            }
        }
    }

    function showAnswer() {
        const enteredAnswer = userAnswer.value.replace(/\s/g, '');
        console.log('entered:', enteredAnswer, 'right:', finalQuestions[finalRandom].a);
        if (enteredAnswer === finalQuestions[finalRandom].a) {
            userscore += 1;
        }

        userAnswer.value = '';
        headerscore();
    }

    getData();
    finalQ();
    headerscore();
    questionCounter(questionCount);


    userAnswer = document.querySelector('.input');

    if (userAnswer) {
        userAnswer.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {

                nextbtn.click();
            }
        });
    }

    nextbtn.onclick = () => {
        showAnswer();
        finalQuestions.splice(finalRandom, 1);
        finalQ();
        questionCount++
        questionCounter(questionCount);
    }

    function headerscore() {
        if (headerscoretext) {
            headerscoretext.textContent = `Score: ${userscore} / ${questionsLength}`;
        }
    }

    function questionCounter(currentQuestion) {
        if (finalQuestions.length < 1) {
            left.textContent = '';
        } else {
            left.textContent = `Question ${currentQuestion} / ${questionsLength}`;
        }
    }

});

