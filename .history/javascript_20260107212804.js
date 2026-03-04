
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
            callback("Not found data", undefined);
        }
    }
}


const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/todos/2";
const url3 = "https://jsonplaceholder.typicode.com/todos/3";

getData(url1, function(error, data) {
    if(error) {
        console.log(error);
        console.log("Not find any data 1 !!!");
    }
    else {
        console.log(data);

        getData(url2, function (error, data) {
            if(error) {
                console.log(error);
                console.log("Data not found 2 !!!");
            }
            else {
                console.log(data);
                console.log("Data not found!!!");

                getData(url3, function (error, data) {
                    if(error) {
                        console.log(error);
                        console.log("Data not found 3 !!!");
                    }
                    else {
                        console.log(data);
                        console.log("Data not found!!!");
                    }
                });
            }
        });
    }
});



const getTOdoos = function() {
    return new Promise(function(resolve, reject) {
        if() {
            resolve(data);
        }
        else {
            reject ()
        }
    })
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