fetch('https://fakestoreapi.com/products').then((data)=>{
    //console.log(data);
    return data.json(); //Converting to javascript object
}).then((completedata)=>{
    //console.log(completedata[2].title); //Checking access of data in the console
    //Displaying data in the browser
    let data1 = "";
    //Map method to access all the data
    completedata.map((values)=>{
        data1 += `<div class="cards">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} alt="img" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">$${values.price}</p>
    </div>`
    });
    //Accessing the id fromm html
    document.getElementById("cards").innerHTML = data1;

}).catch((err)=>{ //If we get an error
    console.log(err);
})