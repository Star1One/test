
// const url = "https://jsonplaceholder.typicode.com/todos";

function getData(url, callback) {

    const request = new XMLHttpRequest();

    request.open('Get', url);
    request.send();

    request.onload = function() {
        if(request.status == 200) {
            const data = JSON.parse(request.responseText);
            // console.log("OK", data);
            callback(undefined, data);

            for(let i of data) {
                console.log("Title: ", i.title);
            }
        }
        else {
            // console.log("Not Found!!");
            callback();
        }
    }
}


const url = "https://jsonplaceholder.typicode.com/todos";

getData();






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