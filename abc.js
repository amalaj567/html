document.write("<h1>welcome<h1>")
console.log("hellow")

var a
a=90
document.write(a +"<br>")

let b
b=60
document.write(b +"<br>")

const c=100
document.write(c +"<br>")

// document.getElementsByClassName("demo1")[0].innerHTML="HELLOW WORLD"

let nodes=document.getElementsByClassName("demo2")
for(let i=0;i<nodes.length;i++)
{
    nodes[i].innerHTML="HELLOW WORLD"
}

let heading1=document.querySelectorAll(".heading")
for(let i=0;i<heading1.length;i++)
{
    heading1[i].style.color='yellow'

}
