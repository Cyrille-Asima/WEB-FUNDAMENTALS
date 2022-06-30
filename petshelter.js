function hide(element) {
    element.remove();
}
function message() {
    alert ("You are looking for a cat");
}

var count = 3;
var countElement = document.querySelector("#count");

function add1() {
    count++;
    countElement.innerText =  count + " petting(s) ";
    console.log(count);
}

var count2 = 5;
var count2Element = document.querySelector("#count2");

function add2() {
    count2++;
    count2Element.innerText =  count2 + " petting(s) ";
    console.log(count2);
}

var count3 = 8;
var count3Element = document.querySelector("#count3");

function add3() {
    count3++;
    count3Element.innerText =  count3 + " petting(s) ";
    console.log(count2);
}

function changeddl($this)
{
    if($this.value=="cat")
    {
        alert("You are looking for a : Cat");
    }
    if($this.value=="dog")
    {
        alert("You are looking for a : Dog");
    }
}
