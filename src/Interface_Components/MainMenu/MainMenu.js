const main = document.querySelector(".dominantContent")
const canvas = document.querySelector('canvas')
const fragment = document.createDocumentFragment() // create and append new elements faster with method


const mMenu = document.createElement("div");
mMenu.className = 'mainMenu'



mMenu.innerHTML= `
    <div class='mainMenuContainer'>
        <div class='mMPoints'>

            <span class='mMScore'>0</span>
            <span>Points</span>


        </div>
        <div class='mMButtonCon'>
            <button class='mMStartB'>START GAME</button>
        </div>
    </div>
`



fragment.appendChild(mMenu)
main.insertBefore(fragment,canvas)
