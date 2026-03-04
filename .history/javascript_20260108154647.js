
const url = "https://jsonplaceholder.typicode.com/todos/1";

const getTodos = function (url) {
    const response = fetch(url);
    if(response.this.state.) {

    }
}

















// fetch(url)
//     .then((response) => {
//         console.log(response);                      // just success to property NOT data detail.

//     })



// fetch(url)

//     .then((response) => {
//         if(response.status == 200) {
//             return response.json();
//         }
//         else {
//             throw new Error("Not find it.");
//         }
//     }).then((data) => {
//         console.log(data);                 // second then success to property NOT data detail.
//     }).catch((error) => {
//         console.log(error.message);
//         console.log(error);
//     }) 















// const getTodos = function(url) {

//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest();

//         request.open('Get', url);
//         request.send();

//         request.onload = function() {

//             if(request.status == 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             }
//             else {
//                 reject("Not Found...")
//             }
//         } 

//     });

// }

// const url1 = "https://jsonplaceholder.typicode.com/todos/1";
// const url2 = "https://jsonplaceholder.typicode.com/todos/2";
// const url3 = "https://jsonplaceholder.typicode.com/todos/3";


// getTodos(url1).then(data => {
//     console.log(data);
//     return getTodos(url2);

// })
//     .then(data => { 
//         console.log(data);
//         return getTodos(url3);
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch((error) => console.log("Error"));



// getTodos(url1).then(function(data) {
//     console.log(data);
// }).catch((error) => console.log("Error"));


// getTodos(url1).then(function(data) {
//     console.log(data);
// }).catch((error) => console.log("Error"));




// getTodos(url1, function(error, data) {
//     if(error) {
//         console.log(error);
//         console.log("Not fount it");
//     }
//     else {
//         console.log("Data: ", data);

//         getTodos(url2, function(error, data) {
//             if(error) {
//                 console.log(error);
//                 console.log("Not fount it");
//             }
//             else {
//                 console.log("Data: ", data);

//                 getTodos(url3, function(error, data) {
//                     if(error) {
//                         console.log(error);
//                         console.log("Not fount it");
//                     }
//                     else {
//                         console.log("Data: ", data);
//                     }
//                     });

//             }
//         });

//     }

// });


// const getTOdooss = function () {
//     return new Promise(resolve, reject);

//     if(true) {
//         resolve(data);
//     }
//     else {
//         reject(error);
//     }
// }

// getTOdooss().then((data) => {
//     console.log(data);

// }).catch((error) => {
//     console.log(error);
// })





// const request = new XMLHttpRequest();

// request.open('GET', 'data.json');
// request.send();

// request.onload = function () {
//     if (request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         console.log(data);
//     } else {
//         console.log("Error");
//     }
// };



// // const url = "https://jsonplaceholder.typicode.com/todos";

// function getData(url) {

//     return new Promise(function(resolve, reject) {
//         const request = new XMLHttpRequest();

//         request.open('Get', url);
//         request.send();

//         request.onload = function() {
//             if(request.status == 200) {
//                 const data = JSON.parse(request.responseText);
//                 // console.log("OK", data);
//                 resolve(data);

//                 for(let i of data) {
//                     console.log("Title: ", i.title);
//                 }
//             }
//             else {
//                 // console.log("Not Found!!");
//                 reject("Not found data");
//             }
//         }
//     })


// }

// function getData () {
//     return new Promise(function(resolve, reject) {
//         const request = new XMLHttpRequest();

//         request.open('Get', url);
//         request.send();

//         request.onload(function() {
//             if(request.status == 200) {
//                 const data = JSON.parse(request.responseText);
//                 console.log(data);
                
//                 resolve(data);

//                 for(let i of data) {
//                     ...
//                 }
//             }
//         })
//     })
// }


// const url1 = "https://jsonplaceholder.typicode.com/todos/1";
// const url2 = "https://jsonplaceholder.typicode.com/todos/2";
// const url3 = "https://jsonplaceholder.typicode.com/todos/3";

// getData(url1, function(error, data) {
//     if(error) {
//         console.log(error);
//         console.log("Not find any data 1 !!!");
//     }
//     else {
//         console.log(data);

//         getData(url2, function (error, data) {
//             if(error) {
//                 console.log(error);
//                 console.log("Data not found 2 !!!");
//             }
//             else {
//                 console.log(data);
//                 console.log("Data not found!!!");

//                 getData(url3, function (error, data) {
//                     if(error) {
//                         console.log(error);
//                         console.log("Data not found 3 !!!");
//                     }
//                     else {
//                         console.log(data);
//                         console.log("Data not found!!!");
//                     }
//                 });
//             }
//         });
//     }
// });



// const getTOdoos = function() {
//     return new Promise(function(resolve, reject) {
//         if() {
//             resolve(data);
//         }
//         else {
//             reject (error);
//         }
//     })
// }

// getTOdoos().then(function(data) {
//     console.log(data);

// }).catch(function(error) {
//     console.log(error);
// })



// getData(url1).then(function(data) {
//     console.log(data);
//     return getData(url2);
// }).then(function(data) {
//     console.log(data);
//     return getData(url3);
// }).then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.log("Error: ", error);
// })

// getData(url2).then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//     console.log("Error: ", error);
// })


// getData(url3).then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//     console.log("Error: ", error);
// })





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