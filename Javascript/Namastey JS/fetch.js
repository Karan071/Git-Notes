const apiUrl = "https://api.github.com/users/karan071"

async function handlePromise() {
    const data = await fetch(apiUrl);
    const jsonValue = await data.json();

    

    //console.log(jsonValue);
    
    // iterate over the object and print each key - value pair;
    // we cannot use maps, reduce or filter here because we are handling objects here not arrays.
    // const obj = Object.values(jsonValue);
    // console.log(obj);

    


}

handlePromise(); // function call



//fetch() -> Response.json() -> result ;(jsonValue)

//normally
// fetch(apiUrl).then((res)=> res.json()).then(res => console.log(res));

// new things to learn
//Object.values(jsonValue): This extracts all the values from the jsonValue object and returns them as an array.