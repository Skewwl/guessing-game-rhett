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

// Variables
let availAnswers = ['Yes', 'Y', 'No', 'N'];

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
}

// if (a5 === 'Yes' || a5 === 'Y'){
//     console.log(person + " you are wrong, Seattle weather is nobody's ally.");
// } else if (a5 === 'No' || a5 === 'N'){
//     console.log(person + " you are absolutely correct Seattle weather ruins my life everyday. Please help me escape");
// }

