

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","tlo.png")
loadSprite("choinka", "choinka.png")
loadSprite('choinka2', 'choinka2.png')
loadSound("muzyka", "gdyslicznapanna2.mp3")

//loadSound("muzyka","gdyslicznapanna2.mp3")

add([
    sprite("kartka")
])

const choinka = add([
    sprite("choinka")
])

let pierwsza = true

loop(1, ()=>{
    
    if(pierwsza){
        choinka.use(sprite("choinka2"))
        pierwsza=false
    }

    else
    
    {
        choinka.use(sprite("choinka"))
        pierwsza=true
    }
})

onMouseRelease(()=>play("muzyka"))