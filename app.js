
let count  = 0;

const value = document.getElementById('value');

function function1()
{
    count--;
   value.innerHTML = count;
}
function function2()
{
    count=0;
    value.innerHTML= count;
}
function function3()
{
    count++;
    value.innerHTML = count;
}

document.querySelector(".btn decrease").addEventListner("click",function1);
document.getElementsByClassName(".btn reset").addEventListner("click",function2);
document.getElementsByClassName(".btn increase").addEventListner("click",function3);
// decbut.onclick = function(){
//     count--;
//     value.textContent = count;
// }
// resbut.onclick = function()
// {
//     count = 0;
//     value.textContent = count;
// }
// incbut.onclick = function()
// {
//     count++;
//     value.textContent = count;
// }

