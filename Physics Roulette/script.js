let mydiv = document.querySelector("#bestdiv")
console.log(mydiv)

let myresults = document.querySelector("#results")

mydiv.addEventListener("click", e=>{
    console.log("Div clicked!")
    myresults.innerHTML = `<h1>IT WORKS</h1>`
})

let btn = document.querySelector("#btn")
btn.addEventListener("click", e => {
    mydiv.innerHTML += `<img src = "ostriches.jpg">`
})