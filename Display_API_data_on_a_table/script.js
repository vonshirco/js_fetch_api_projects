//Using promises to fetch the API
fetch("https://fakestoreapi.com/products")
    .then((data)=>{ //Will have entire data for the API
        // console.log(data); //json format
        //Converting the data to object
        return data.json(); 
    })
    .then((objectData)=>{ //data that is converted to object
        console.log(objectData[0].title);
        let tableData = "";
        objectData.map((values)=>{ //Values will have entired data present in the API
            tableData += `
            <tr>
                <td>${values.title}</td>
                <td>${values.description}</td>
                <td>${values.price}</td>
                <td><img src="${values.image}"/></td>
            </tr>
            `;
        });
        document.getElementById("table_body").innerHTML = tableData;
    })
    .catch((err)=>{ //Method to handle errors
        console.log(err);
    })