document.addEventListener("DOMContentLoaded", function () {
  const userAnswer = document.getElementById('answer');
  const userAnswer2 = document.getElementById('answer2');
  const char = document.querySelector('.char');

  userAnswer.addEventListener('keyup', function () {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  });

  function checkAnswer() {

    var inputExpression = document.getElementById("answer").value;


    const correctExpression = "30+12";


    var inputNumbers = inputExpression.match(/\d+/g);
    var sortedInput = inputNumbers ? inputNumbers.map(Number).sort().join('+') : '';


    var correctNumbers = correctExpression.match(/\d+/g);
    var sortedCorrect = correctNumbers ? correctNumbers.map(Number).sort().join('+') : '';


    if (sortedInput === sortedCorrect) {

      showImage('../../Images/Happy.png', 'happy')
    } else {

      showImage('../../Images/Mad.png', 'mad')
    }
  }


  userAnswer2.addEventListener('keyup', function () {
    if (event.key === 'Enter') {
      checkAnswer2();
    }
  });

  function checkAnswer2() {

    var inputExpression = document.getElementById("answer2").value;


    const correctExpression = "20+30+4+1";


    var inputNumbers = inputExpression.match(/\d+/g);
    var sortedInput = inputNumbers ? inputNumbers.map(Number).sort().join('+') : '';


    var correctNumbers = correctExpression.match(/\d+/g);
    var sortedCorrect = correctNumbers ? correctNumbers.map(Number).sort().join('+') : '';


    if (sortedInput === sortedCorrect) {

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