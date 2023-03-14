import { Hello } from "./helo"
import { useState } from "react"
import { But } from "./but"
import { Mfun } from "./mfun"
let Game = () => { 

    var [bool, setbol] = useState<boolean | null>(false)
const [nn,setnn] = useState<number|null>(null)
const [ran,setran] = useState<number>(Math.round(1+Math.random()*2))
const[txt,settxt]=useState<string>("TIME TO CHOOSE !")
    let GG = (n:number) => {
        setnn(n)
        Mfun(n,ran,settxt)
        setTimeout(()=>setbol(true),3000)
    }

    return (
    <>
      <div className='p-3 shadow-lg text-info text-center ' style={{height:"auto"}}><h1 className=''>should i kill my self or have a cup of coffe ?</h1></div>
        
        <div className='mx-auto w-75 text-center d-flex  justify-content-center align-items-center ' style={{height:"85%"}} > 
                <div className="bg-dark h-75 w-75 shadow-lg border border-info border-1 rounded dd" style={{transition:"1.2s"}}>

                    <Hello n={ran} t={bool} />

                    <h1 className="text-danger dd" style={{transition:"1.2s"}}>{txt}</h1>

                <But n={GG} />
        
        
            </div>
        </div>
    </>
    )}

export default Game