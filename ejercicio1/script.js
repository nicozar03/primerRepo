const numeros=[1,2,4,12,43,55,66,55,0,-1];
const odds=numeros.filter(number=>{
    return number %2 !==0;  
});

var oddest=0;
for(i=0; i<=oddest; i++){
    if(odds[i]>oddest){
        var oddest=odds[i];
    }
}
console.log(oddest);

