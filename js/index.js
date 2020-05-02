'use strict';

const mypattern = /(?!^\s*?$)^.+$/;

const  inputTaskElem = document.querySelector('input[name="task"]');
const createTaskButtonElem = document.getElementById('createTaskButton');
inputTaskElem.oninput  = onInputHandler;
createTaskButtonElem.addEventListener('click',onCreateTaskButtonClick);

let isValid = false;


function onCreateTaskButtonClick(event) {
    const taskInputElem = document.querySelector("input[placeholder=\"Enter your task\"]");
    taskInputElem.value = "";

}

function onInputHandler(event){
    isValid = mypattern.test(this.value);
    if(isValid){
        this.classList.remove("invalidstyle");
        this.classList.add("validstyle");
    }
    else{
        this.classList.add("invalidstyle");
        this.classList.remove("validstyle");
    }
    console.log(isValid);
}