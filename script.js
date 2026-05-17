let cMoney=document.querySelector(".money");
let amount=document.querySelector(".amount");
let description=document.querySelector(".description");
let addButton=document.querySelector(".btn1");
let container=document.querySelector(".container");
let displayArea=document.querySelector(".displayArea");
let expenseBtn=document.querySelector("#btn2");
let totalAdd=document.querySelector("#come");
let totalExp=document.querySelector("#go");
let currentMoney=0;
let income=0;
let expense=0;

function createDescription1() {
    let a=document.createElement("div")
        let delBtn=document.createElement("button")
        let value=document.createElement("p")
        a.innerHTML=description.value;
        delBtn.innerHTML="Delete";
        let b=amount.value;
        value.innerHTML=b;
        console.log(value.innerHTML)
        a.classList.add("childDiv")
        value.classList.add("valueChild")
        delBtn.classList.add("delBtn")
        delBtn.style.backgroundColor="green";
        delBtn.style.color="#fff"
        displayArea.appendChild(a);
        a.appendChild(value);
        a.appendChild(delBtn);
        delBtn.addEventListener("click",()=>{
        displayArea.removeChild(a);
        let previousElement=Number(delBtn.previousElementSibling.innerHTML)
        let remain=(currentMoney- previousElement);
        let newIncome=income-previousElement;
        totalAdd.innerHTML=newIncome;
        income=newIncome;
    console.log(remain);
       cMoney.innerHTML=remain;
       currentMoney=remain;   
        })
}
function createDescription2() {
    let a=document.createElement("div")
        let delBtn=document.createElement("button")
        let value=document.createElement("p")
        a.innerHTML=description.value;
        delBtn.innerHTML="Delete";
        value.innerHTML=amount.value;
        a.classList.add("childDiv")
        value.classList.add("valueChild")
        delBtn.classList.add("delBtn")
        delBtn.style.backgroundColor="red";
        delBtn.style.color="#fff"
        displayArea.appendChild(a);
        a.appendChild(value);
        a.appendChild(delBtn);
        delBtn.addEventListener("click",()=>{
            displayArea.removeChild(a);
            let previousElement=Number(delBtn.previousElementSibling.innerHTML)
            let remain=(currentMoney+ previousElement);
            //
            let newIncome=expense-previousElement;
            totalExp.innerHTML=newIncome;
            expense=newIncome;
            // 
           cMoney.innerHTML=remain;
           currentMoney=remain;    
            })
}
function addMoney() {
    let inputAmount= Number(amount.value);
        currentMoney+=inputAmount;
        income+=inputAmount;
    cMoney.innerHTML=currentMoney;
   totalAdd.innerHTML=income;
   createDescription1()
}
function expenseFun() {
    if(currentMoney>amount.value || currentMoney==amount.value){
        let inputAmount= Number(amount.value);
            currentMoney-=inputAmount;
        cMoney.innerHTML=currentMoney;
        expense+=inputAmount;
        totalExp.innerHTML=expense;
        createDescription2()
        return
    }
if(amount.value>currentMoney){
    alert("Insuffient Balance")
}   
}
expenseBtn.addEventListener("click",function(){
    if(!(amount.value==''||amount.value==0  || amount.value<0 ||description.value=='')){
        expenseFun()
        amount.value='';
        description.value=''
    }
    else{
        alert("Enter valid amount or description .Both amount and description fieldes are necesarry.")
    }
})
addButton.addEventListener("click",function(){
    if(!(amount.value==''||amount.value==0 || amount.value<0 || description.value=='')){
        addMoney()
        amount.value='';
        description.value='' 
    }
    else{
        alert("Enter valid amount or description .Both amount and description fieldes are necesarry.")
    }
})