
const url = "https://jsonplaceholder.typicode.com/todos";

const request = new XMLHttpRequest();

request.open('Get', url);
request.send();

request.onload = function() {
    if(request.status === 200) {
        console.log(typeof request.responseText);

        const data = JSON.parse(request.responseText);
        console.log(data);
        console.log(data.title);
        // console.log(data[1].name);

        for(let i of data) {
            console.log("For inform: ", i);
            console.log("Title information: ", i.title);
        }

    }
    else {
        console.log("Request not found!!");
    }
}



// const url = "https://jsonplaceholder.typicode.com/todos/1";

// const request = new XMLHttpRequest();

// request.open('Get', 'data.json');
// request.send();

// request.onload = function() {
//     if(request.status === 200) {
//         console.log(typeof request.responseText);

//         const data = JSON.parse(request.responseText);
//         console.log(data);
//         console.log(data[1].name);

//         for(let i of data) {
//             console.log("For inform: ", i);
//         }

//     }
//     else {
//         console.log("Request not found!!");
//     }
// }