
alert('For this next question please only use numbers.')
// Question 6
let guess = 0;
let response = [];

//Below I was surprosed to see the && operator was needed, not ||
// While the user guess # is less than 4 or user response != 10 
while(guess < 4 && parseInt(response[response.length - 1]) !== 10){
    response[response.length] = prompt('Guess how many movies are on my favorite movies list presented on this website.');
      if (parseInt(response[response.length - 1]) > 10){
        alert('Your guess was too high. Try again.');
        guess = guess + 1;
    } else if (parseInt(response[response.length - 1]) < 10){
        alert('Your guess was too low. Try again');
        guess = guess + 1;
    } else {
        alert('Amazing! You guessed it!');
    };
};

if (guess === 4) {
    alert('Dang you actually used all of your guesses. But let me tell you the answer: My favorite movie list has 10 movies listed on it.')
}

alert('On to the next question! Do your best to guess what any one of my three favorite animals are. Please only use lowercase in your guesses and do not make the animal plural.');

// Question 7
let attempts = 0;
let rightAnswers = ['cat', 'duck', 'goldfish'];
let promptValue;
while (attempts < 6 && promptValue !== rightAnswers[0] && promptValue !== rightAnswers[1] && promptValue !== rightAnswers[2]){
    promptValue = prompt('What do you think is one of my three favorite animals?');
        switch (rightAnswers[0] || rightAnswers[1] || rightAnswers[2]){
            case promptValue:
                alert('You guessed one of them! Amazing job! The correct answers were ' + rightAnswers[0] + ', ' + rightAnswers[1] + ', and ' + rightAnswers[2] + '.');
                break;
            default:
                attempts = attempts + 1;
                if (attempts < 6){
                    alert('Oooo not quite. Try again.')
                } else if (attempts === 6){
                    alert('Bummer! you are all out of attempts. The correct answers were ' + rightAnswers[0] + ', ' + rightAnswers[1] + ', and ' + rightAnswers[2] + '.')
                }
        }
}

