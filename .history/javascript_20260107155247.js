
const url = "https://jsonplaceholder.typicode.com/todos/1";

const request = new XMLHttpRequest();

request.open('Get', 'data3.txt');
request.send();

request.onload = function() {
    if(request.status === 200) {
        console.log(request.);
    }
    else {
        console.log("Request not found!!");
    }
}