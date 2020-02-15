const requestify = require('requestify');

var jsonObject;
async function main(){
    let data = await requestify.get("http://localhost:3000/api/v1/service");
    return data.getBody();
}
jsonObject = main();
let hi;
jsonObject.then(function (result) {
    let json = result.data;
    for(var x = 0; x < json.length; x++){
        // console.log(json[x].title);
        if(json[x].title === "dsadsad"){
            hi = json[x];
            return;
        }
    }
});

console.log(hi);