import { c } from "../Main_Components/Canvas"


export class Enemy
{

    constructor(x,y,radius,color,velocity)
    {
        this.x = x
        this.y = y
        this.rds = radius
        this.clr = color
        this.velocity = velocity
    }


    draw()
    {
        c.beginPath() //To draw new graphics on canvas 
        c.arc(this.x,this.y,this.rds, 0,Math.PI * 2,false) // circle method
        c.fillStyle = this.clr //color
        c.fill() // draw method
    }


    update()
    {
        this.draw()

        this.x = this.x + this.velocity.x

        this.y = this.y + this.velocity.y
    }
}