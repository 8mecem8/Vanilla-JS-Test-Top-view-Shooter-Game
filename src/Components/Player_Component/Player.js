import { c } from "../Main_Components/Canvas"


export class Player
{

    constructor(x,y,radius,color)
    {
        this.x = x
        this.y = y
        this.rds = radius
        this.clr = color
    }


    draw()
    {
        c.beginPath() //To draw new graphics on canvas 
        c.arc(this.x,this.y,this.rds, 0,Math.PI * 2,false) // circle method
        c.fillStyle = this.clr //color
        c.fill() // draw method
    }

}