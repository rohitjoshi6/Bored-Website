/*fetch('http://www.boredapi.com/api/activity/')
.then(Response=> Response.json())
.then(Data=>console.log(Data.activity))*/


const textDisplay=document.querySelector("#text-area");
const button=document.querySelector('#glass-btn');

button.addEventListener('click', async function(){

    const res= await fetch('http://www.boredapi.com/api/activity/');
    const myJson= await res.json();

    let myString= JSON.stringify(myJson);

    let myobject=JSON.parse(myString);

    textDisplay.textContent= myobject.activity;

})