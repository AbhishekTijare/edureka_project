const indian = ["a1","a2","a3"];
const us= ["b1","b2"];
console.log(indian);
console.log(us);
const result =[...indian, ...us];
const result2 =[...result, "kia"];
console.log(result);
console.log(result2);