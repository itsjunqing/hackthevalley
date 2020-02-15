const fetch = require('node-fetch');

function getServiceByTitle(title) {
    fetch("http://localhost:3000/api/v1/service").then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data.data);
        let json = data.data;
        for(let x = 0; x < json.length; x++){
            if(json[x].title === title){
                console.log(json[x]);
                return json[x]
            }
        }
    })
}

let a = getServiceByTitle("ASDASDADA");

console.log(a);