function writefile(cb){
    setTimeout(()=>{
        console.log("Writting file");
        cb();
    },2000);
    
}
const ack = function(){
    console.log("data is written");

}
writefile(ack);
//Callback== a function passed as a parameter to asynchronous function
// which is executed by asynchronous function after asynchronous tasks are performed  