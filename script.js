let quote = document.querySelector("#quote")
let author = document.querySelector("#author")
let btn = document.querySelector("#btn")

const url  = "https://api.quotable.io/random"
let getquote = ()=>{
    fetch(url).then(data => data.json())
    .then((item) => {
        console.log(item.content)
        console.log(item.quthor)
        quote.innerText = item.content;
        author.innerHTML = item.author;
    })
}
window.addEventListener("Load",getquote)
btn.addEventListener("click" ,getquote )