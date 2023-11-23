var buttonadd = document.getElementById("add")
var buttonadds = document.getElementById("adds")
buttonadds.addEventListener('click', () => {
    buttonadd.classList.add('button-add')
    // buttonadd.textContent = "button Added"
})

var buttonremove = document.getElementById("remove")
var img=document.getElementById("imgrem")
buttonremove.addEventListener('click', () => {
    img.classList.remove('button-remove')
})

// var buttontoggle = document.getElementById("btn-3")
// buttontoggle.addEventListener('click', () => {
//     buttontoggle.classList.toggle('second')
// })

var buttontoggle =document.getElementById("btn-3")
var chnage=document.getElementById("tog")
buttontoggle.addEventListener('click',()=>{
    chnage.classList.toggle('first')
})


var buttoncontains = document.getElementById("contains")
buttoncontains.addEventListener('click', () => {
    var content = prompt("Enter the class name")
    let x = buttoncontains.classList.contains(content)
    // alert("The button class is present") = x
    document.getElementById("demo").innerHTML = x
})

// var box = document.getElementById("replace")
// box.addEventListener('click', () => {
//     box.classList.replace('myStyle', 'newStyle')
// })

var para=document.getElementById("imgrep")
var imgchange=document.getElementById("replace")
imgchange.addEventListener('click',()=>{
    para.classList.replace('myStyle','newStyle')
})
