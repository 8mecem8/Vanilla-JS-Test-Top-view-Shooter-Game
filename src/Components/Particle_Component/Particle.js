import { c } from "../Main_Components/Canvas"


export class Particle
{

    constructor(x,y,radius,color,velocity)
    {
        this.x = x
        this.y = y
        this.rds = radius
        this.clr = color
        this.velocity = velocity
        this.alpha = 1 //to adjust transparancy of the partical color
        this.friction = 0.96 // slow down particals after explosion
    }


    draw()
    {
        c.save()
        c.globalAlpha = this.alpha 
        c.beginPath() //To draw new graphics on canvas 
        c.arc(this.x,this.y,this.rds, 0,Math.PI * 2,false) // circle method
        c.fillStyle = this.clr //color
        c.fill() // draw method
        c.restore()
    }


    update()
    {
        this.draw()

        this.velocity.x *= this.friction
        this.velocity.y *= this.friction


        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y

        this.alpha -= 0.01



    }
}