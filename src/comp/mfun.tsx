
import { useState } from "react";
let i: number;

let Mfun = (n: number, r: number,d:any) => {
  let y = document.querySelectorAll(".dd")
  console.log(y)
  let x = document.querySelectorAll("button") as NodeListOf<HTMLButtonElement>;
    x[n].classList.replace("btn-outline-info","btn-outline-warning");

  for (i = 1; i < 4; i++) {
      x[i].classList.add("disabled");
    if (i !== n) {
      x[i].classList.replace("btn-outline-info","btn-outline-danger");
    }
    }
  if ((n === 1 && r === 3) || (n === 2 && r === 1) || (n === 3 && r === 2)) {
          
    setTimeout(() => {
      x[n].style.color = "#00FA9A"
      x[n].style.borderColor = "#00FA9A"
      x[0].style.color = "#00FA9A"
      x[0].style.borderColor = "#00FA9A"
      y[1].classList.replace("text-danger", "text-success")
      y[0].classList.replace("border-info", "border-success")
      d("you win")
    }
      , 3000)

  }
  else if (n === r) {
          
    setTimeout(() => {

      x[0].classList.replace("btn-outline-info", "btn-outline-warning")
      y[1].classList.replace("text-danger", "text-warning")
      y[0].classList.replace("border-info", "border-warning")
      d("you lucky")
    }
      , 3000)

  }
  else { 
    setTimeout(() => { 
    x[n].classList.replace("btn-outline-warning", "btn-outline-danger")
    x[0].classList.replace("btn-outline-info", "btn-outline-danger")
    y[0].classList.replace("border-info", "border-danger")
      d("you dead")
    },3000)
  }

};


export { Mfun };
