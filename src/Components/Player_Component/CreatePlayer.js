import { canvas } from "../Main_Components/Canvas"
import { Player } from "./Player"


const PlayerPositionX = canvas.width / 2  //divide with 2 to reach the middle point
const PlayerPositionY = canvas.height / 2  //divide with 2 to reach the middle point

const Player1 = new Player(PlayerPositionX,PlayerPositionY,14,'white')



export default function CreatePlayer()
{
    Player1.draw()

    return {...Player1}

}