// Question 1 

const myFunctionExpression = function() {
    console.log("Bitho");
};



// Question 2

const theButton = document.querySelector(".btn");

theButton.addEventListener("click", clickTheButton);

function clickTheButton(){
    console.log("I was clicked");
    };


// Question 3 

const inputText= document.querySelector("#firstName");

function logValueOfKeyDown(event) {
    console.log("value: ", event.target.value);
};

inputText.addEventListener("keydown", logValueOfKeyDown);


// Question 4

const myButton = document.querySelector("button");

function callMouseOver() {
    myButton.classList.add("hover");
    console.log(myButton.className);
};

myButton.addEventListener("mouseover", callMouseOver);


// Question 5 

const myButton = document.querySelector("[data-animal='dog']");

function callMouseOut() {
    myButton.classList.remove("hover");
    console.log(myButton.className);
};

myButton.addEventListener("mouseout", callMouseOut);


// Question 6 

//I am aware the answer is wrong, but can't get it right.

const listItems = document.querySelectorAll("li");

function callMouseOver() {
        for(let i =0; i < listItems.length; i++) {
        console.log([data-animal]);
    };
}

listItems.addEventListener("mouseover", callMouseOver);



// Question 7 

const animal = "cow";

switch(animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
            break;
    case "bird":
        console.log("Tweet");
            break;
    default:
        console.log("Harrumph");
                }


// Question 8 

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheeps) {
    console.log(sheeps);
});



// Question 9

function logTime() {
    
    console.log("Hello");

    if(counter === 5) {
        clearInterval(intervalId);
    }
    counter++;
}

let counter = 0;
const intervalId = setInterval(logTime, 500);


// Question 10 

const textUpdater = document.querySelector("div");

function updateDiv() {
    textUpdater.innerHTML = "Text updated";    
}

setTimeout(updateDiv, 2000);