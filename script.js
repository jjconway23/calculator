let sumQuestion = [];
let numberBtns = Array.from(document.querySelectorAll(".number-btn"));
let operands = Array.from(document.querySelectorAll(".operand"))
const cancel = document.querySelector(".cancel")
const plus = document.querySelector(".plus")
const subtract = document.querySelector(".subtract")
const multiply = document.querySelector(".times")
const divide = document.querySelector(".divide")
const equals = document.querySelector(".equals")
let resultBox = document.querySelector("#input-box")
const currentSum = document.querySelector(".current-sum")
const deleteBtn = document.querySelector(".delete")
let ul = document.querySelector("#sum-history")
let equations = [];

numberBtns.forEach( btn => {
  btn.addEventListener("click", (e) => {
      resultBox.innerText += e.target.innerText;

  })
})
operands.forEach( op => {
  op.addEventListener("click", (e)=> {
      sumQuestion.push(resultBox.innerText, e.target.innerText.toString())
      resultBox.innerText = "";
      currentSum.innerText = sumQuestion.join(" ")
  })
})
cancel.addEventListener("click", () =>{
    resultBox.innerText ="";
    sumQuestion.length = 0;
    currentSum.innerText = "";
})
deleteBtn.addEventListener("click", () => {
    sumQuestion.pop()
    currentSum.innerText = sumQuestion
})
equals.addEventListener("click", ()=> {

  if(!resultBox.innerText){
    return
  }else{
    sumQuestion.push(resultBox.innerText)
    currentSum.innerText = sumQuestion.join(" ")
    equations.push(sumQuestion.join(" ") + " = " + eval(sumQuestion.join(" ")))
    equations.forEach( equation => {
      ul.innerHTML+= `<li>${equation}</li>`
      equations.shift()
    })
    sumQuestion.shift()
    return resultBox.innerText = eval(sumQuestion.join(" "))
  }
  
})
equations.forEach( equation => {
  ul.append(`<li>${equation}</li>`)
})
