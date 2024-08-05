// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
setTimeout(()=>{
    console.log("Hello");
},2000);

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("Operation timed out"));
    },2000);
});

promise.catch((error) =>{
    console.log("Error is :-",error.message);
});


// Activity 2: Chaining Promises
    // Task 3: Create a sequence of promises that simulate fetching data from a server.Chain the promises to log messages in a specific order.
// Function to simulate fetching data from the server
function fetchData(data, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
}

// Simulate a sequence of data fetching
fetchData("Fetching user data...", 1000)
    .then(response => {
        console.log(response); 
        return fetchData("Fetching posts data...", 2000);
    })
    .then(response => {
        console.log(response); 
        return fetchData("Fetching comments data...", 1500);
    })
    .then(response => {
        console.log(response); 
        return fetchData("Fetching likes data...", 1000);
    })
    .catch(error => {
        console.error("Error:", error);
    });


// Activity 3: Using Async/Awalt
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
function reply(delay,value){
   return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(value);     // Resolving the promise
        },delay);
    })
}
// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function handle(pro) {
    try{
        const value = await pro;
        console.log(value);
    }
    catch(error){
        console.error('Error:',error.message);
    }
}

const example = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        reject(new Error('Promise reject'));
    },2000);
});

handle(example);

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

function fetchData2(){
    fetch(apiUrl)
        .then(response =>{
            if(!response.ok){
                throw new Error(`Network response was not ok`+ response.statusText);
            }
            return response.json();
        })
        .then(data =>{
            console.log(data);
        })
        .catch(error =>{
            console.error(`Error fetching data:`, error);
        });
}

fetchData2();

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/awalt.
let src =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";
const getCurrency = async()=>{
    try{
        let response = await fetch(src);
        if(!response.ok){
            throw new Error(`Error: ${response.status}- Resource not found`);
        }
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
};
getCurrency();

 // Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
function promise3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success promise 3");
        },3000);
    });
}

const p1 = promise3();
const p2 = promise3();
Promise.all([p1,p2]).then((messages)=>{
    console.log(messages);
});

// Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.
Promise.race([p1,p2]).then((messages)=>{
    console.log(messages);
})


// Feature Request:

// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
function promise4(data,delay){
    return new Promise((resolve,reject,rejected = false)=>{
        setTimeout(()=>{
            if(!rejected)
            resolve(`Success p4 ${data}`);
            else
                reject(`Its failure: error`);
        },delay);
    });
}

promise4("Gogo",1000)
    .then(response =>{
        console.log(response);
        return promise4("Dont go",3000);
    })
    .then(response=>{
        console.log(response);
    })
    .catch(error=>{
        console.error(error);
    });

promise4("Gogo2",1000,true)
    .then(response =>{
        console.log(response);
    })
    .catch(error=>{
        console.error(`Glitch in matrix ${error}`);
    });

// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.


// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.

// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/awalt, and logs the response data.

// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise. race to handle multiple promises concurrently and logs the results.
