import { Enemy } from "../Enemy_Component/Enemy"
import { Particle } from "../Particle_Component/Particle"
import CreatePlayer from "../Player_Component/CreatePlayer"
import { Projectile } from "../Projectile_Component/Projectile"

import { c, canvas } from "./Canvas"
import { scoreNum,mainMenuWhole,mMStartB,mMPoints,mainMenuContainer } from "./Game"




const centerCanvasX = canvas.width / 2
const centerCanvasY = canvas.height / 2
 


//Create Projectiles on click
let Particles = []
let Projectiles = []
let ProjectileSpeed = 14
addEventListener('click',(e)=>
{
    const angle = Math.atan2(e.clientY - centerCanvasY,e.clientX - centerCanvasX) // calculate the angle between 2 points..
    const velocity = 
    {
        x: Math.cos(angle) * (ProjectileSpeed ? ProjectileSpeed : 10),
        y: Math.sin(angle) * (ProjectileSpeed ? ProjectileSpeed : 10)
    }


    Projectiles.push(new Projectile(centerCanvasX, centerCanvasY, 3 , 'red' ,velocity))
})


//Create enemies on every second
let Enemies = []
setInterval(()=>
{
    const rds = Math.random() * (30 ) + 6
    let x
    let y
    
    

     if(Math.random() < 0.5)
     {
        x = Math.random() > 0.5 ? Math.random()  * rds + (canvas.width) : Math.random()  * (0 - rds)
        y = Math.random() * canvas.height

     } else{

        x = Math.random() * canvas.width
        y = Math.random() > 0.5 ? Math.random()  * rds + (canvas.height) : Math.random()  * (0 - rds)

           }
          
        const clr = `hsl(${Math.random() * 360},80%,60%)`,
        
          angle = Math.atan2(centerCanvasY - y, centerCanvasX - x), // calculate the angle between 2 points..
          velocity = 
          {
              x: Math.cos(angle),
              y: Math.sin(angle) 
          }

    Enemies.push(new Enemy(x,y,rds,clr,velocity))
   

},1000)



let score = 0 //Game score
let animationID // to stop/end the game 
export function RenderGame()
{
    animationID = requestAnimationFrame(RenderGame)
    const P1layer = CreatePlayer()
    

    c.fillStyle = "rgba(0,0,0,0.1)"
    c.fillRect(0,0,canvas.width,canvas.height) // clear canvas to draw updated graphics on every render


    
    Particles.map((prtl,prtlIndex )=>
        {

            prtl.alpha <= 0 ? Particles.splice(prtlIndex, 1) : prtl.update()
        })


    
    Projectiles.map((projectile,projectileIndex )=>
        {
            projectile.update()



            //remove the object when out of innerview of canvas 
            if(
               projectile.x + projectile.rds < 0 ||
               projectile.x - projectile.rds > canvas.width ||
               projectile.y + projectile.rds < 0 ||
               projectile.y - projectile.rds > canvas.height
              )
            {
                setTimeout(()=> //used setTimeout to prevent flashing in the game when enemy and projectile removed
                        {
                        
                        Projectiles.splice(projectileIndex,1)
                        },0)
            }
        })


     Enemies.map((enemy,enemyIndex)=>
        {
            enemy.update()


            const distance =  Math.hypot(P1layer.x - enemy.x, P1layer.y - enemy.y ) // these method to get the distance between 2 objects

            if(distance - (enemy.rds) - P1layer.rds < 1)
            {   
                scoreNum.innerHTML = 0
                mMPoints.innerHTML = score
                mMStartB.innerHTML = 'RESTART GAME'
                mainMenuWhole.style.display = 'grid'
                mainMenuContainer.style.backgroundColor = '#a900ff8c'
                cancelAnimationFrame(animationID)
            }

            //Remove projectiles and the enemies from the array and screen
            Projectiles.map((prjt,prjtIndex) => 
                {
                    
                    const distance =  Math.hypot(prjt.x - enemy.x, prjt.y - enemy.y) // these method to get the distance between 2 objects

                    if(distance - (enemy.rds-2) - prjt.rds < 1)//If there is collision between objects
                    {



                   





                        //Create Particles when a projectile hits enemy
                        for (let index = 0; index < enemy.rds ; index++) //set amount of the particles
                        {
                            Particles.push(
                                new Particle(
                                    prjt.x, 
                                    prjt.y, 
                                    Math.random() * 2 ,
                                    enemy.clr,
                                    {
                                        x: (Math.random() - 0.5) * (Math.random() * ProjectileSpeed),
                                        y: (Math.random() - 0.5) * (Math.random() * ProjectileSpeed)
                                    }
                                    ))
                            
                        }







                        //if enemy is big first make it small then kill it 
                        if(enemy.rds - 10 >= 10)
                        {

                            gsap.to(enemy,{rds:enemy.rds - 10, duration: 1 })
                            


                            //Increase the score when hit big sized enemies
                            score += 2
                            scoreNum.innerHTML = score


                            setTimeout(()=> //used setTimeout to prevent flashing in the game when enemy and projectile removed
                                {
                                Projectiles.splice(prjtIndex,1)
                                },0)

                        }else
                            {
                                //Increase the score for normal size enemies
                                score += 10
                                scoreNum.innerHTML = score


                                setTimeout(()=> //used setTimeout to prevent flashing in the game when enemy and projectile removed
                                {
                                Enemies.splice(enemyIndex,1)
                                Projectiles.splice(prjtIndex,1)
                                },0)

                            }      


                    }
                })

        })

}

export function ResetSettings() 
 {
    Particles = []
    Projectiles = []
    Enemies = []
    score = 0
 }