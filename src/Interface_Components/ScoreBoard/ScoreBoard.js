const main = document.querySelector(".dominantContent")
const canvas = document.querySelector('canvas')
const fragment = document.createDocumentFragment() // create and append new elements faster with method


const scoreDiv = document.createElement("div");
scoreDiv.className = 'scoreMain'



scoreDiv.innerHTML= `
    <div>
        <span>Score :</span>
        <span id='scoreNum' >0</span>
    
    </div>
`



fragment.appendChild(scoreDiv)
main.insertBefore(fragment,canvas)



