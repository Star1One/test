
const url = "https://jsonplaceholder.typicode.com/todos/1";

const request = new XMLHttpRequest();

request.open('Get', 'data3.txt');
request.send();

request.onload = function() {
    console.log(request);
}