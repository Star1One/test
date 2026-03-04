
const url = "https://jsonplaceholder.typicode.com/todos/1";

const request = new XMLHttpRequest();

request.open('Get', 'data.json');
request.send();

request.onload = function() {
    if(request.status === 200) {
        console.log(typeof request.responseText);

        const data = JSON.parse(request.responseText);
        console.log(data);
        console.log(data[1].name);

        for(let i of data) {
            console.log(i);
        }

    }
    else {
        console.log("Request not found!!");
    }
}