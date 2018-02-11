var forInObj = {
    name : 'Test',
    age : 25,
    Gender : 'M'
}

console.log("For In loop example -")
for (var key in forInObj) {
    if (forInObj.hasOwnProperty(key)) {
        var element = forInObj[key];
        console.log(key + " : "+element);
    }
}

var forOfObj = [
    {name : 'One'},
    {name : 'two'},
    {name : 'three'}
]


console.log("For of loop example -")
for(var obj of forOfObj){
    console.log(obj);
}