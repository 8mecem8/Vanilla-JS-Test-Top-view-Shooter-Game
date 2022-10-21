import { RenderGame, ResetSettings } from "./RenderGame";
import "../../Interface_Components/ScoreBoard/ScoreBoard"
import '../../Interface_Components/MainMenu/MainMenu'



const startButton = document.querySelector('.mMStartB')
export const mainMenuWhole = document.querySelector(".mainMenu")
export const mMStartB = document.querySelector(".mMStartB")
export const mMPoints = document.querySelector(".mMScore")
export const mainMenuContainer = document.querySelector(".mainMenuContainer")



export function GameEngine()
{
    
    
    
    startButton.addEventListener('click',()=>
    {
        ResetSettings()
        RenderGame()
        mainMenuWhole.style.display = 'none'
    })

    
}






//score selector has to be here because of unknown error in the renderGame.js file :(
    export const scoreNum= document.querySelector('#scoreNum')