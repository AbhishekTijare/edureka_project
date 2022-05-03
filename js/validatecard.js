function getCardDetails(card){
    validateCard(card,deductAmt);
}


function deductAmt(amount){
  console.log("Amount is deducted")
}


//Third party
function validateCard(card,deductAmt){
    setTimeout(()=>{
        console.log("Validated");
        deductAmt();
    }, 2000)
} 

getCardDetails();
