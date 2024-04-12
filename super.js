const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container')

function addTask() {
    if(inputBox.value ==''){
        alert("please enter a task");
        return;
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value =""
    SVGAnimatedPreserveAspectRatio()
}

listContainer.addEventListener('click', function(e) { if(e.target.tagName == 'LI'){
    e.target.classlist.toggle('checked');
    saveData();
} else if(e.target.tagName == 'SPAN') {
    e.target.parentElement.remove();
}
this.animate    
});

function saveData() {
localStorage.setItem("data" , listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage. getItem("data");
}

showTask();