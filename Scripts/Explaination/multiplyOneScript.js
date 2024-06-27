document.addEventListener("DOMContentLoaded", function () {
    const userAnswer = document.getElementById('answer');
    const char = document.querySelector('.char');


    userAnswer.addEventListener('keyup', function () {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

    function checkAnswer() {

        var inputExpression = document.getElementById("answer").value;


        const correctExpression = "5+5";
        const correctExpression2 = "2+2+2+2+2";


        var inputNumbers = inputExpression.match(/\d+/g);
        var sortedInput = inputNumbers ? inputNumbers.map(Number).sort().join('+') : '';


        var correctNumbers = correctExpression.match(/\d+/g);
        var sortedCorrect = correctNumbers ? correctNumbers.map(Number).sort().join('+') : '';
        var correctNumbers2 = correctExpression2.match(/\d+/g);
        var sortedCorrect2 = correctNumbers2 ? correctNumbers2.map(Number).sort().join('+') : '';

        if (sortedInput === sortedCorrect || sortedInput == sortedCorrect2) {

            showImage('../../Images/Happy.png', 'happy')
        } else {
    
          showImage('../../Images/Mad.png', 'mad')
        }
    }
    function showImage(src, style) {
        char.src = src;
        if (style === 'happy') {
          char.style = "position: fixed; top: 35%; right: 73%; rotate: 35deg;";
    
        } else {
          char.style = '';
        }
        char.classList.add('active');
        setTimeout(() => {
          char.classList.remove('active');
          char.style = '';
        }, 4000);
      }
});