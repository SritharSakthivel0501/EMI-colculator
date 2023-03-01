let input1 = document.getElementById("inputone")
// console.log(input1);
let input2 = document.getElementById("inputtwo")
// console.log(input2);
let input3 = document.getElementById("inputthree")
// console.log(input3);
let button = document.getElementById("sumbit")
let loan = document.querySelector("p")
// console.log(loan);
let payable = document.getElementById("payable")
// console.log(payable);
let tamount = document.getElementById("total")
// console.log(tamount);



// button.addEventListener("click", (e) => {
//     let amount = input1.value
//     // console.log(amount);
//     let interest = input2.value / 1200
//     let month = input3.value
//     // console.log(amount);
//     // console.log(interest);
//     // console.log(month);
//     let int = interest /12 / 100

//     let emi = Math.round(amount * int * (Math.pow((1 + int), month) / (Math.pow((1 + int), month) - 1)))


//     let totalAmount = emi * month 
//     tamount.innerText = totalAmount
//     // console.log(emi);
//     // let principal = amount * interest * month
//     let principal = Math.round(amount - totalAmount)
//     console.log(principal);
//     let TotalInterest = principal 
//     // console.log(TotalInterest);

//     loan.innerText = emi
//     payable.innerText = TotalInterest

    
//     // console.log(totalAmount);

//     input1.value =""
//     input2.value =""
//     input3.value =""
// })

let amount = input1.value
     // console.log(amount);
let interest = input2.value
let month = input3.value

let int = interest / 12 /100

let calemi = () =>{
    let emi = amount * int * (Math.pow(1 + int, month)/(Math.pow(1 + int, month) -1))
    return emi
}

let updata = (emi) =>{
    loan.innerHTML = Math.round(emi)

    let tooamount = Math.round(month * emi)
    tamount.innerText = tooamount 

    let intset = (tooamount - amount)
    payable.innerText = intset
} 
let init = () =>{
    let  emi = calemi();
    updata(emi);
}
init()

let result = () =>{
amount = input1.value
interest = input2.value
month = input3.value
int = interest / 12 /100
}

button.addEventListener("click",() =>{
    result();
    let  emi = calemi();
    updata(emi);

    input1.value =""
    input2.value =""
    input3.value =""
} )
