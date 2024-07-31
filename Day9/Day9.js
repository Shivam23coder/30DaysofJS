// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.
const para = document.getElementById("para");
console.log(para.innerText);
para.innerText = "My name is Shivam";   

// Task 2: Select an HTML element by its class and change its background color.
const content = document.querySelector(".content");
content.style.backgroundColor= "blue";


// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
const newdiv = document.createElement("div");
newdiv.innerText = "Hello world!";
const body = document.querySelector("body");
body.append(newdiv);

// Task 4: Create a new 11 element and add it to an existing ul list.
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.innerText = "Hello!!!!";
ul.appendChild(li);
console.log(ul.innerHTML);
// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM. Task 6: Remove the last child of a specific HTML element.
li.remove();

// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const img = document.querySelector("#pic");
img.style.width = "500px";


// Task 8: Add and remove a CSS class to/from an HTML element.
addEventListener("mouseover",(rem)=>{
    const removeid = document.getElementById("removeid");
    console.log(removeid.innerHTML);
    removeid.classList.remove("toremove");
})


// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
function changtxt(){
    para.innerText = "I love js";
    para.style.appearance = "bold";
}
// Task 10: Add a mouseover event listener to an element that changes its border color.
addEventListener("mousedown",(even) =>{
    para.style.border = "2px solid black";
})
