


// let count = 0;
// document.getElementById('clickme')
// .addEventListener("click", function (){
//     console.log("button is clicked", count++);
// })

//we'll wrap this in a function : for closure

function addEventListenerClick(){
    let count = 0;
    document.getElementById('clickme')
    .addEventListener("click", function (){
    console.log("button is clicked", count++);
});
}
addEventListenerClick();


