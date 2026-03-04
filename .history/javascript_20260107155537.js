
const url = "https://jsonplaceholder.typicode.com/todos/1";

const request = new XMLHttpRequest();

request.open('Get', 'data.json');
request.send();

request.onload = function() {
    if(request.status === 200) {
        console.log(request.typeof);
    }
    else {
        console.log("Request not found!!");
    }
}