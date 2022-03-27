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
const sumDetails = document.querySelector(".sum-details")
const deleteBtn = document.querySelector(".delete")
let equation

numberBtns.forEach( btn => {
  btn.addEventListener("click", (e) => {
      resultBox.innerText += e.target.innerText;

  })
})
operands.forEach( op => {
  op.addEventListener("click", (e)=> {
      sumQuestion.push(resultBox.innerText, e.target.innerText.toString())
      resultBox.innerText = "";
      sumDetails.innerText = sumQuestion.join(" ")
  })
})
cancel.addEventListener("click", () =>{
    resultBox.innerText ="";
    sumQuestion.length = 0;
    sumDetails.innerText = "";
})
deleteBtn.addEventListener("click", () => {
    sumQuestion.pop()
    sumDetails.innerText = sumQuestion
})
equals.addEventListener("click", ()=> {

  if(!resultBox.innerText){
    return
  }else{
    sumQuestion.push(resultBox.innerText)
    sumDetails.innerText = sumQuestion.join(" ")
    return resultBox.innerText = eval(sumQuestion.join(" "))
  }
  
})

