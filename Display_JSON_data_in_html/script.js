//Calling the fetch method (to send a request in the server to fetch the json file)
fetch("products.json")
    //catching servers response
    .then(function(response){ //takes a fuction as an argument
        //json method to convert json data to a javascript object that we can work with
        return response.json();
    })
    //another .then method to fetch the products
    .then(function(products){ //We pass a fuction as an argument so we can do something with the data(products)
        //To get access to the table's body element and stores in variable placeholder
        let placeholder = document.querySelector("#data-output");

        //Variable set to empty string, at the end of the script it will hold all the products
        let out = "";

        //Looping through the products array to get access to all the products
        for(let product of products){
            //Append/add all products to the out variable (` ` - inorder to write regular html inside them, useful in filling templates)
            out += `
                <tr>
                    <td><img src='${product.image}'></td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.inventory}</td>
                    <td>${product.productCode}</td>
                </tr>
            `;
        }

        //Populating the table's body element with our products
        placeholder.innerHTML = out;
    });