fetch('http://www.boredapi.com/api/activity/')
.then(Response=> Response.json())
.then(Data=>console.log(Data.activity))