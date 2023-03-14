import { ReactElement, useState } from "react"
import { FaHandPaper,FaHandRock,FaHandScissors} from "react-icons/fa"



let Hello = (n:(any)) => { 
let X=  n.t 
    let N = n.n

        

        return (
          <div className="d-flex justify-content-center align-items-center"  style={{height:"40%"}}>
                
                <button className="shadow-lg m-1 btn btn-outline-info d-flex justify-content-center align-items-center disabled" style={{ height: "50px", width: "50px",transition:"0.6s" }} >
            {X && N === 1 ? <FaHandScissors style={{ width: "60px", height: "60px", transition: "0.6s" }} />
            : X && N === 2 ? <FaHandRock style={{ width: "60px", height: "60px", transition: "0.6s" }} />
            : X && N === 3 ? <FaHandPaper style={{ width: "60px", height: "60px", transition: "0.6s" }} />
            : (<>54431</>)}</button> 

                {/* {X && N === 1 ?
                    <button className="shadow-lg m-1 btn btn-outline-info d-flex justify-content-center align-items-center disabled" style={{ height: "50px", width: "50px",transition:"0.6s" }} >
                    <FaHandScissors style={{ width: "60px", height: "60px",transition:"0.6s" }} /></button>  : null}
                {X && N === 2 ?
                    <button className="shadow-lg m-1 btn btn-outline-info d-flex justify-content-center align-items-center disabled" style={{ height: "50px", width: "50px",transition:"0.6s" }} >
                    <FaHandRock style={{ width: "60px", height: "60px",transition:"0.6s" }} /></button>  : null}
                {X && N === 3 ?
                    <button className="shadow-lg m-1 btn btn-outline-info d-flex justify-content-center align-items-center disabled" style={{ height: "50px", width: "50px",transition:"0.6s" }} >
                    <FaHandPaper style={{ width: "60px", height: "60px" ,transition:"0.6s"}} /></button>  : null}
                {!!!X ?
                    <button className="btn btn-outline-info shadow-lg m-1 d-flex justify-content-center align-items-center disabled  " style={{ height: "60px", width: "60px",transition:"0.6s" }} >
                    </button>:null 
                }        */}



                        </div>
        )
    }



export {Hello }
