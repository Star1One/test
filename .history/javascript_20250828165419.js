
// const checkbox = document.querySelector('.checkBox');
// // const buttonLink = document.querySelector('.button');
// const ul = document.querySelector('ul');

// checkbox.addEventListener('change', function(e){

//     if(checkbox.checked) {
//         ul.style.display = 'none';
//         console.log("check");
//     }
//     else {    
//         ul.style.display = 'block';
//         console.log("unCheck");
//     }
// });





// localStorage.clear();

// localStorage.setItem('key1', "Mehdi1");
// localStorage.setItem('key2', "Mehdi2");
// localStorage.setItem('key3', "Mehdi3");

// const item = localStorage.getItem('key2');
// console.log(item);

// const array = ["Amin", "Fardad", "Sirvan"];
// const object = {name: "ALMA", age: 20, isStudent: false};


// const arrayItems = localStorage.setItem('key4', array);
// const objectItems = localStorage.setItem('key5', JSON.stringify(object));


// const newArray = localStorage.getItem('key4').split(',');
// const newObject = JSON.parse(localStorage.getItem('key5'));



// console.log(arrayItems);
// console.log(objectItems);

// console.log(newArray);
// console.log(newObject);




const inputtextbox = document.querySelector('.textbox');
const buttonItem = document.querySelector('.button');
const ul = document.querySelector('ul');
const spanDelete = `<span class="delete">Delete</span>`; 


buttonItem.addEventListener('click', function(e){

    const emptyinput = inputtextbox.value.trim();
    if(emptyinput == "") {
        window.alert("Enter valid value...");
        return ;
    }

    const li = document.createElement('li');
    li.className = "list";

    const spanItem = document.createElement('span');
    spanItem.className = "name";
    spanItem.innerHTML = inputtextbox.value;


    li.appendChild(spanItem);
    li.innerHTML += spanDelete;
    ul.appendChild(li);

    saveToLocalstorage(inputtextbox.value);

    inputtextbox.value = '';
    e.preventDefault();

});


// localStorage.clear();
function saveToLocalstorage(task) {

    let arrayTasks;
    if(localStorage.getItem('arrayTasks') === null) {
        arrayTasks = [];
    }
    else {
        arrayTasks = JSON.parse(localStorage.getItem('arrayTasks'));
    }

    arrayTasks.push(task);

   localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));

}; 

document.addEventListener('DOMContentLoaded', function(e) {

    let arrayTasks;
    if(localStorage.getItem('arrayTasks') === null) {
        arrayTasks = ["Tondar", "Sun shighn", "Ghalandar", "New mexico"];
        localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
    }
    else {
        arrayTasks = JSON.parse(localStorage.getItem('arrayTasks'));
    }

    ul.innerHTML = '';

    for(let item of arrayTasks) {
        const li = document.createElement('li');
        li.className = "list";

        const spanItem = document.createElement('span');
        spanItem.className = "name";
        spanItem.innerHTML = item;


        li.appendChild(spanItem);
        li.innerHTML += spanDelete;
        ul.appendChild(li);
    }

});

ul.addEventListener('click', function(e) {
    if(e.target.className == 'delete') {
        e.target.parentElement.remove();   // parentElement refers to li
        console.log(e.target.parentElement.children[0].innerHTML);   // display selected which item
        removeItemFromLocalStorage(e.target.parentElement.children[0].textContent );
    }
})

function removeItemFromLocalStorage(task) {
    let arrayTasks;
    if(localStorage.getItem('arrayTasks') == null) {
        arrayTasks = [];
    }
    else {
        arrayTasks = JSON.parse(localStorage.getItem('arrayTasks'));
    }

    for(let i = 0 ; i<arrayTasks.length ; i++) {
        if(arrayTasks[i] == task) {
            arrayTasks.splice(i, 1);
        }
    }

    if(arrayTasks.length === 0) {
        localStorage.clear();
    }
    else {
        localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
    }
};

const checkbox = document.querySelector('.checkBox');

checkbox.addEventListener('change', function(e) {
    if(checkbox.checked == true){
        ul.style.display = 'none';
    }
    else {
        // ul.style.display = 'initial';
        ul.style.display = 'block';
    }
});

inputSearch = document.querySelector('.search');

inputSearch.addEventListener('keyup', function(e){
    for(let item of ul.children) {
        if(item.firstChild.textContent.indexOf(inputSearch.value) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    }
})



