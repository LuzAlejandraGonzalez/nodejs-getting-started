{
    //Block Scope
    {
        //Nested Block Scope 
        //let, const
    }
}

if(true){
    //Block Scope
}

for (let i=0; i<= 10; i++){
    //Function Scope
}

function sum(a,b){
    //Function Scope
    var result = a + b;
}

console.log(sum(4 + 3));