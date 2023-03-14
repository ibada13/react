import { FaHandPaper,FaHandRock,FaHandScissors} from "react-icons/fa"

let But = (n: any) => {

    return (
        <div className=" d-flex justify-content-around  align-items-center" style={{height:"40%"}}>
        <button id="bu" onClick={()=>{n.n(1)}} className="shadow-lg m-1 btn  btn-outline-info d-flex justify-content-center align-items-center"style={{height:"50px",width:"50px",transition:"0.8s"}} ><FaHandScissors  style={{width:"60px",height:"60px"}}/></button>            
        <button id="bu" onClick={()=>{n.n(2)}} className="shadow-lg m-1 btn btn-outline-info d-flex justify-content-center align-items-center" style={{height:"50px",width:"50px",transition:"0.8s"}} ><FaHandRock      style={{width:"60px",height:"60px"}}/></button>            
        <button id="bu" onClick={()=>{n.n(3)}} className="shadow-lg m-1 btn btn-outline-info d-flex justify-content-center align-items-center" style={{height:"50px",width:"50px",transition:"0.8s"}} ><FaHandPaper     style={{ width: "60px", height: "60px" }} /></button>            
            
            </div>
    )
}


export {But}