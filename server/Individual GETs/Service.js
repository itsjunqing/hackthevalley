const requestify = require('requestify');

console.log("started");

var jsonObject;

requestify.get("http://localhost:3000/api/v1/service")
    .then(function (response) {
        console.log(response.getBody());
        jsonObject = response.getBody();
    });