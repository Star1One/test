
const url = "https://jsonplaceholder.typicode.com/todos/1";

const request = new 











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