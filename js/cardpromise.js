function validateCard(card){
    const newPromise = new Promise((resolve,reject)=>{
        if (card){
             setTimeout(()=>{ resolve(console.log("card is valide"))},2000);
        }else {
            reject("card is invalid ");
        }
    }) ;
    return newPromise;

}
// we can only call once other will be rejected and similar with reject 
// function getCardDetails(card){
//     validateCard(card);
//     .then(
//         (msg)=>{
//            console.log(msg);
//            deductAmt();
//         },// called when promise is resolved
//         ()=>{
//             console.log(err);
//         };//called when promise is rejected 
//         ()=>{console.log("completed");}// called when promise is completed 

//     )
// }

// function chaining ==>

function getCardDetails(card){
    validateCard("dummy")
    .then(
        (msg)=>{
            console.log(msg);
            return msg;
        },
        err=>{
            console.log(err);
        }
    )
    .then(
        (msg)=>{
           deductAmt();
           return;
        }
    )
    .then(
        ()=>{printdata();}
    )

}
function printdata(){
    console.log("printing")
}
function deductAmt(amount){
    console.log("amount is deducted");

}
getCardDetails("9999 9999 9999");