"use strict";

console.log('we are loaded');
//Intro
alert("Hello, this is the website creator! I would like to ask you a few question about me! Let's see what you know!");

//User name and greeting
let person = prompt("First, please tell us your name:");
console.log('Okay so we know his/her name is ' + person)

if (person === null) {
    alert("It looks like we went over our prompt a little too quickly the first time. Please refresh and try again.");
} else {
    alert("Great! Thanks " + person + " it's nice to meet you. My name is Rhett. Please only answer the following questions with 'Yes' or 'Y' for yes; likewise please only use 'No' or 'N' for no.")
}

let correctAnswers = 0;

// Question 1
let a1 = prompt(person + " would you say that it is better to meet me like this more than in real life?")

if (a1 === 'Yes' || a1 === 'Y' || a1 === 'No' || a1 === 'N'){
    alert('Thank you very much for answering appropriately.');
} else {
    alert('I think that you may have typed your response in wrong. Please refresh the browser and start over.');
}

if (a1 === 'Yes' || a1 === 'Y'){
    alert(person + ' I am sorry but you are wrong. It is better to meet in real life.');
} else if (a1 === 'No' || a1 === 'N'){
    alert(person + ' is correct. I would rather meet him/her in person too.');
    correctAnswers++;
}

// if (a1 === 'Yes' || a1 === 'Y'){
//     console.log(person + ' I am sorry but you are wrong. It is better to meet in real life.');
// } else if (a1 === 'No' || a1 === 'N'){
//     console.log(person + ' is correct. I would rather meet him/her in person too.');
// }

// Question 2
let a2 = prompt(person + " would you say that I am the coolest person on the planet?")

if (a2 === 'Yes' || a2 === 'Y' || a2 === 'No' || a2 === 'N'){
    alert('Thank you very much for answering appropriately.');
} else {
    alert('I think that you may have typed your response in wrong. Please refresh the browser and start over.');
}

if (a2 === 'Yes' || a2 === 'Y'){
    alert(person + ' you are totally right.');
    correctAnswers++;
} else if (a2 === 'No' || a2 === 'N'){
    alert(person + ' you should know better. I am very very cool');
}

// if (a2 === 'Yes' || a2 === 'Y'){
//     console.log(person + ' you are totally right.');
// } else if (a2 === 'No' || a2 === 'N'){
//     console.log(person + ' you should know better. I am very very cool');
// }

// Question 3
let a3 = prompt("My best friend " + person + ", do you think that I lived in Los Angeles for most of my twenties?")

if (a3 === 'Yes' || a3 === 'Y' || a3 === 'No' || a3 === 'N'){
    alert('Thank you very much for answering appropriately.');
} else {
    alert('I think that you may have typed your response in wrong. Please refresh the browser and start over.');
}

if (a3 === 'Yes' || a3 === 'Y'){
    alert(person + ' you aced it! I lived there para muchos anos.');
    correctAnswers++;
} else if (a3 === 'No' || a3 === 'N'){
    alert(person + ", I don't know how to break this one to you... But you're wrong.");
}

// if (a3 === 'Yes' || a3 === 'Y'){
//     console.log(person + ' you aced it! I lived there para muchos anos.');
// } else if (a3 === 'No' || a3 === 'N'){
//     console.log(person + ", I don't know how to break this one to you... But you're wrong.");
// }

// Question 4
let a4 = prompt("Not many questions left, do you think I am from Seattle?")

if (a4 === 'Yes' || a4 === 'Y' || a4 === 'No' || a4 === 'N'){
    alert('Thank you very much for answering appropriately.');
} else {
    alert('I think that you may have typed your response in wrong. Please refresh the browser and start over.');
}

if (a4 === 'Yes' || a4 === 'Y'){
    alert(person + ' you knocked that one out of the park.');
    correctAnswers++;
} else if (a4 === 'No' || a4 === 'N'){
    alert(person + " you were so close but totally wrong!");
}

// if (a4 === 'Yes' || a4 === 'Y'){
//     console.log(person + ' you knocked that one out of the park.');
// } else if (a4 === 'No' || a4 === 'N'){
//     console.log(person + " you were so close but totally wrong!");
// }

// Question 5
let a5 = prompt("Would you guess that the darkness of Seattle is my ally? Before you answer I want you to know that I did not merely adopt the darkness but I was born in it, molded by it.")

if (a5 === 'Yes' || a5 === 'Y' || a5 === 'No' || a5 === 'N'){
    alert('Thank you very much for answering appropriately.');
} else {
    alert('I think that you may have typed your response in wrong. Please refresh the browser and start over.');
}

if (a5 === 'Yes' || a5 === 'Y'){
    alert(person + " you are wrong, Seattle weather is nobody's ally.");
} else if (a5 === 'No' || a5 === 'N'){
    alert(person + " you are absolutely correct Seattle weather ruins my life everyday. Please help me escape");
    correctAnswers++;
}

// if (a5 === 'Yes' || a5 === 'Y'){
//     console.log(person + " you are wrong, Seattle weather is nobody's ally.");
// } else if (a5 === 'No' || a5 === 'N'){
//     console.log(person + " you are absolutely correct Seattle weather ruins my life everyday. Please help me escape");
// }

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
        correctAnswers++;
    };
};

if (guess === 4) {
    alert('Dang you actually used all of your guesses. But let me tell you the answer: My favorite movie list has 10 movies listed on it.')
}

alert('On to the next question! Do your best to guess what any one of my three favorite animals are. Please only use lowercase in your guesses and do not make the animal plural.');

// Does break work outside of switch functions?
// Question 7
let attempts = 0;
let rightAnswers = ['cat', 'duck', 'goldfish'];
let promptValue;
while (attempts < 6 && promptValue !== rightAnswers[0] && promptValue !== rightAnswers[1] && promptValue !== rightAnswers[2]){
    promptValue = prompt('What do you think is one of my three favorite animals?');
        switch (rightAnswers[0] || rightAnswers[1] || rightAnswers[2]){
            case promptValue:
                alert('You guessed one of them! Amazing job! The correct answers were ' + rightAnswers[0] + ', ' + rightAnswers[1] + ', and ' + rightAnswers[2] + '.');
                correctAnswers++;
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
alert(`This concludes the guessing game. You scored ${correctAnswers} out of 7.`);
