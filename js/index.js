'use strict';

const mypattern = /(?!^\s*?$)^.+$/;

const  inputTaskElem = document.querySelector('input[name="task"]');
const createTaskButtonElem = document.getElementById('createTaskButton');
const taskList = document.getElementById('tasksList');
const  delButton = document.getElementById('deleteTaskButton');
inputTaskElem.oninput  = onInputHandler;
createTaskButtonElem.addEventListener('click',onCreateTaskButtonClick);
let isValid = false;

delButton.addEventListener('click',deleteArticle);

function deleteArticle() {
    const deleteArticles = document.querySelectorAll('input[type="checkbox"]');
    if (deleteArticles){
        for (let item of deleteArticles){
            if (item.checked){
                item.parentNode.remove();
            }
        }
    }
}

function onCreateTaskButtonClick(event) {
    const taskInputElem = document.querySelector("input[placeholder=\"Enter your task\"]");
    addTaskItem(taskInputElem.value);
    taskInputElem.value = "";

}

function addTaskItem (value) {
    if(value) {
        const taskElem = document.createElement('li');
        taskElem.classList.add('taskElement');
        taskElem.textContent = value;
        taskElem.append(createTime());
        taskElem.append(createDeleteCheck());
        taskList.append(taskElem);

    }
    return;
}

function createTime() {
    const timeElement = document.createElement('div');
    timeElement.classList.add('timeElement');
    const time = new Date;
    timeElement.textContent = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
    return timeElement;
}
function createDeleteCheck() {
    const deleteCheckBox = document.createElement('input');
    deleteCheckBox.setAttribute('type','checkbox');
    return deleteCheckBox;
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
}