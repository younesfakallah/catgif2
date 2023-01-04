let container = document.querySelector(".container");
let p = document.createElement("img");

fetch("/api/gif")
    .then(res => res.json())
    .then(res => res.map(elem => container.innerHTML += insertDom(elem.desc, elem.gif)))

const insertDom = (desc, gif) => {
    return `<div>
                <h4>${desc}</h4>
                <img src="${gif}" />
            </div>`
}