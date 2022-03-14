function sum(...numbers){
    let result = 0;
    for (let i=0;i<numbers.length;i++){
         result = result + numbers[i];
    }
    console.log(result);
}
sum(2,3);
sum(2,3,4);
sum(2,3,4,5,6);

